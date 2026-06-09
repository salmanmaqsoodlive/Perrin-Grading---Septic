// Curated gallery manifest — hand-picked high-resolution project photos.
// Only sharp, full-resolution originals are used (the low-res `work-*` crops are retired).
// `w`/`h` are the image's intrinsic pixel dimensions so the masonry can render each
// photo uncropped at its true aspect ratio.
export type GalleryItem = {
  src: string;
  category: string;
  title: string;
  alt: string;
  w: number;
  h: number;
};

const item = (
  src: string,
  category: string,
  title: string,
  w: number,
  h: number,
): GalleryItem => ({
  src: `/gallery/${src}`,
  category,
  title,
  alt: `${title} — Perrin's Grading & Septic project`,
  w,
  h,
});

export const galleryItems: GalleryItem[] = [
  // —— Land Grading ——
  item("177.jpeg", "Land Grading", "Finished Driveway & Lawn", 4032, 3024),
  item(
    "419.webp",
    "Land Grading",
    "Gravel Drive Through the Pines",
    3024,
    3024,
  ),
  item("421.webp", "Land Grading", "Farm Driveway Grading", 3024, 3024),
  item("289.jpeg", "Land Grading", "Driveway & Lot Grading", 4032, 3024),
  item("368.jpeg", "Land Grading", "Hillside Site Grading", 4032, 3024),
  item("1000001763.jpeg", "Land Grading", "New Gravel Road", 4032, 2268),
  item("1000000228.jpeg", "Land Grading", "Road Grading & Base", 4032, 2268),

  // —— Excavation & Earthwork ——
  item("404.webp", "Excavation", "Excavator at Work", 3024, 3024),
  item("IMG_1107.jpeg", "Excavation", "Cut & Fill Earthwork", 5712, 4284),
  item("IMG_1106.jpeg", "Excavation", "Site Excavation & Haul-Off", 5712, 4284),
  item("366.jpeg", "Excavation", "Bulk Excavation", 4032, 3024),
  item("1000002623.jpeg", "Excavation", "Trenching & Earthwork", 2268, 4032),
  item("405.webp", "Excavation", "Excavating a Building Site", 3024, 3024),
  item("1000002638.jpeg", "Excavation", "Grading & Earthmoving", 4032, 2268),
  item(
    "1000001890.jpeg",
    "Excavation",
    "Culvert & Drainage Install",
    4032,
    2268,
  ),

  // —— Septic Systems ——
  item(
    "1000002644.jpeg",
    "Septic Systems",
    "Septic Field Installation",
    4032,
    2268,
  ),
  item("414.webp", "Septic Systems", "Distribution Box Set", 3024, 3024),
  item("IMG_1192.jpeg", "Septic Systems", "Tank Installation", 5712, 4284),
  item("IMG_1183.jpeg", "Septic Systems", "Tank Excavation & Set", 5712, 4284),
  item("415.webp", "Septic Systems", "Risers & Connections", 3024, 3024),

  // —— Pond Building & Repair ——
  item("1000002657.jpeg", "Pond Building", "Finished Farm Pond", 4032, 2268),
  item("1000002462.jpeg", "Pond Building", "Pond Lining & Repair", 4032, 2268),
  item("1000001762.jpeg", "Pond Building", "Pond Bank Lining", 4032, 2268),

  // —— Land Clearing ——
  item(
    "1000000085.jpeg",
    "Land Clearing",
    "Cleared & Ready Acreage",
    4032,
    2268,
  ),

  // —— Hauling & Fleet ——

  item("72.jpeg", "Hauling & Fleet", "Material Hauling", 4032, 3024),
  item("959.jpeg", "Hauling & Fleet", "Skid Steer On Site", 4032, 4024),
  item("436.webp", "Land Clearing", "Clearing & Access Road", 3024, 4024),
  item("742.jpeg", "Hauling & Fleet", "Gravel Delivery", 3072, 4080),
];

export const galleryCategories: string[] = [
  "All",
  ...Array.from(new Set(galleryItems.map((i) => i.category))),
];
