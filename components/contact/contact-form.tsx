"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { services } from "@/data/site";
import { staggerItem, StaggerGroup } from "@/components/ui/reveal";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState<FormState>(emptyForm);

  const update =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/greg.hodge@soulardtechnology.net",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...form,
            _subject: "New estimate request — Perrin's Grading & Septic",
            _template: "table",
          }),
        },
      );
      const data = await res.json();
      if (data.success !== "true" && data.success !== true)
        throw new Error(data.message || "Failed to send message");
      setStatus("sent");
      setForm(emptyForm);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  const field =
    "peer w-full rounded-2xl border border-black/10 bg-white px-4 pb-2.5 pt-6 text-ink outline-none transition-all placeholder-transparent focus:border-brand-red/60 focus:ring-2 focus:ring-brand-red/15";
  const label =
    "pointer-events-none absolute left-4 top-4 text-sm text-ink/45 transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-brand-red peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs";

  return (
    <div className="relative overflow-hidden rounded-5xl bg-white p-7 shadow-card ring-1 ring-black/[0.06] sm:p-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-red/[0.07] blur-3xl" />

      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 14 }}
              className="grid h-20 w-20 place-items-center rounded-full bg-brand-green/10 text-brand-green"
            >
              <CheckCircle2 className="h-10 w-10" />
            </motion.div>
            <h3 className="mt-6 font-display text-2xl font-bold text-ink">
              Message sent — thank you!
            </h3>
            <p className="mt-2 max-w-sm text-ink/60">
              We&apos;ll get back to you shortly. For anything urgent, give us a
              call and we&apos;ll talk it through.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-semibold text-brand-red hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="font-display text-2xl font-bold text-ink">
              Request a free estimate
            </h3>
            <p className="mt-2 text-sm text-ink/55">
              Tell us about your project and we&apos;ll be in touch fast.
            </p>

            <StaggerGroup className="mt-7 grid gap-5 sm:grid-cols-2">
              <motion.div variants={staggerItem} className="relative">
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Name"
                  className={field}
                />
                <label htmlFor="name" className={label}>
                  Full name
                </label>
              </motion.div>
              <motion.div variants={staggerItem} className="relative">
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="Phone"
                  className={field}
                />
                <label htmlFor="phone" className={label}>
                  Phone number
                </label>
              </motion.div>
              <motion.div variants={staggerItem} className="relative sm:col-span-2">
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="Email"
                  className={field}
                />
                <label htmlFor="email" className={label}>
                  Email (optional)
                </label>
              </motion.div>
              <motion.div variants={staggerItem} className="relative sm:col-span-2">
                <select
                  id="service"
                  value={form.service}
                  onChange={update("service")}
                  required
                  className="w-full appearance-none rounded-2xl border border-black/10 bg-white px-4 py-4 text-ink outline-none transition-all focus:border-brand-red/60 focus:ring-2 focus:ring-brand-red/15"
                >
                  <option value="" disabled>
                    What do you need help with?
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="other">Something else</option>
                </select>
              </motion.div>
              <motion.div variants={staggerItem} className="relative sm:col-span-2">
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Message"
                  className={`${field} resize-none`}
                />
                <label htmlFor="message" className={label}>
                  Tell us about your project
                </label>
              </motion.div>
            </StaggerGroup>

            {error && (
              <p className="mt-5 flex items-start gap-2 rounded-2xl bg-brand-red/[0.06] px-4 py-3 text-sm text-brand-red">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                {error}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-7 inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-brand-red to-brand-red-soft font-semibold text-white shadow-[0_14px_34px_-12px_rgba(192,56,43,0.6)] transition-all disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
