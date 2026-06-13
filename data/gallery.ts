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

  // ════════════════════════════════════════════════════════════════
  //  Added from the "Web site pictures" folder — full project archive
  // ════════════════════════════════════════════════════════════════

  // —— Land Grading (added from Web site pictures) ——
  item("1000000040.jpeg", "Land Grading", "Graded Pad Beside Home", 4032, 2268),
  item("1000000042.jpeg", "Land Grading", "Building Site Rough Grade", 4032, 2268),
  item("1000000047.jpeg", "Land Grading", "Graded Lot With Barn", 4032, 2268),
  item("1000000054.jpeg", "Land Grading", "Smooth Graded Building Pad", 1440, 1440),
  item("1000000056.jpeg", "Land Grading", "Driveway Grading At Garage", 1440, 1440),
  item("1000000137.jpeg", "Land Grading", "Graded Slope At Treeline", 4032, 2268),
  item("1000000142.jpeg", "Land Grading", "Shaped Hillside With Tripod", 4032, 2268),
  item("1000001892.jpeg", "Land Grading", "New Gravel Driveway", 4032, 2268),
  item("1000002009.jpeg", "Land Grading", "Graded Driveway To Home", 4032, 2268),
  item("1000002012.jpeg", "Land Grading", "Finished Driveway Grading", 4032, 2268),
  item("1000002706.jpeg", "Land Grading", "Graded Yard At Home", 4032, 2268),
  item("1000002707.jpeg", "Land Grading", "Fresh Dirt Grading", 4032, 2268),
  item("1023.jpeg", "Land Grading", "Graded Gravel Road", 4032, 2268),
  item("193.jpeg", "Land Grading", "Graded Backyard Slope", 4032, 3024),
  item("211.jpeg", "Land Grading", "New Gravel Driveway", 4032, 3024),
  item("286.jpeg", "Land Grading", "Finished Driveway Grading", 4032, 3024),
  item("410.webp", "Land Grading", "Resurfaced Gravel Driveway", 3024, 3024),
  item("456.jpeg", "Land Grading", "Graded Lot By Shop", 1440, 1440),
  item("942.jpeg", "Land Grading", "New Dirt Access Road", 4032, 2268),

  // —— Excavation (added from Web site pictures) ——
  item("1000000151.jpeg", "Excavation", "Excavator Cutting Driveway", 1440, 1440),
  item("1000000152.jpeg", "Excavation", "Excavator On Steep Trench", 1440, 1440),
  item("1000000504.jpeg", "Excavation", "Culvert Drainage Outlet", 640, 360),
  item("1000001165.jpeg", "Excavation", "Foundation Excavation Site", 4032, 2268),
  item("1000001758.jpeg", "Excavation", "Culvert Pipe Trenching", 4032, 2268),
  item("IMG_1111.jpeg", "Excavation", "Mini Excavator Loading Dumpster", 5712, 4284),

  // —— Septic Systems (added from Web site pictures) ——
  item("1000000280.jpeg", "Septic Systems", "Aerial Septic Drain Field", 1440, 1440),
  item("1000002658.jpeg", "Septic Systems", "Septic Riser Installed", 2744, 2268),
  item("1000002739.jpeg", "Septic Systems", "Septic Tanks Being Set", 4032, 3024),
  item("1000002741.jpeg", "Septic Systems", "Septic Drain Field Trenches", 4032, 3024),
  item("1000002747.jpeg", "Septic Systems", "Septic Distribution Manifold", 4032, 2268),
  item("137.jpeg", "Septic Systems", "Septic Tank Set", 4032, 3024),
  item("139.jpeg", "Septic Systems", "Drain Line Inspection", 4032, 3024),
  item("140.jpeg", "Septic Systems", "Drain Field Pipe Install", 4032, 3024),
  item("IMG_1195.jpeg", "Septic Systems", "Septic Tanks Installed", 750, 562),

  // —— Pond Building (added from Web site pictures) ——
  item("1000000016.jpeg", "Pond Building", "Pond Excavation Behind Lawn", 1440, 1440),
  item("1000000146.jpeg", "Pond Building", "Pond Basin Taking Shape", 1440, 1440),
  item("1000000275.jpeg", "Pond Building", "New Pond Filling Up", 4032, 2268),
  item("1000000278.jpeg", "Pond Building", "Freshly Dug Farm Pond", 1440, 1440),
  item("1000002463.jpeg", "Pond Building", "Lined Pond Construction", 4032, 2268),
  item("178.jpeg", "Pond Building", "New Pond Excavation", 720, 960),
  item("207.jpeg", "Pond Building", "Freshly Dug Farm Pond", 1280, 607),
  item("406.webp", "Pond Building", "Filled Pond In Woods", 607, 607),

  // —— Land Clearing (added from Web site pictures) ——
  item("1000000153.jpeg", "Land Clearing", "Cleared Land With Stockpiles", 1440, 1440),
  item("1000000154.jpeg", "Land Clearing", "Cleared Hillside Lot", 1440, 1440),
  item("1000000583.jpeg", "Land Clearing", "Overgrown Roadside Lot", 4032, 2268),
  item("1000000585.jpeg", "Land Clearing", "Cleared Wooded Lot", 4032, 2268),
  item("1000002489.jpeg", "Land Clearing", "Cleared Cabin Site", 4032, 3024),
  item("1000002730.jpeg", "Land Clearing", "Mini Excavator Clearing Land", 4032, 2268),
  item("385.jpeg", "Land Clearing", "Excavator Clearing Woods", 1955, 1466),
  item("451.jpeg", "Land Clearing", "Old Barn Before Clearing", 1440, 1440),
  item("477.jpeg", "Land Clearing", "Overgrown Lot Cleanup", 1440, 1440),
  item("478.jpeg", "Land Clearing", "Cleared Roadside Field", 1440, 1440),
  item("538.jpeg", "Land Clearing", "Brush Along Roadway", 4032, 3024),
  item("554.jpeg", "Land Clearing", "Cleared Hillside Lot", 4032, 3024),
  item("557.jpeg", "Land Clearing", "Thick Roadside Brush", 1440, 1440),
  item("561.jpeg", "Land Clearing", "Cleared Sloped Field", 1440, 1440),

  // —— Hauling & Fleet (added from Web site pictures) ——
  item("1000001759.jpeg", "Hauling & Fleet", "Dump Truck Unloading Dirt", 4032, 2268),
  item("1000001907.jpeg", "Hauling & Fleet", "Dump Truck On Driveway", 4032, 2268),
  item("1000002183.jpeg", "Hauling & Fleet", "Delivered Gravel Pile", 4032, 2268),
  item("191.jpeg", "Hauling & Fleet", "Company Trucks And Skid Steer", 4032, 3024),
  item("293.jpeg", "Hauling & Fleet", "Dump Trucks Unloading Dirt", 800, 600),
  item("408.webp", "Hauling & Fleet", "Flatbed Fleet Lineup", 3024, 3024),
  item("74.jpeg", "Hauling & Fleet", "Dump Truck Delivering Dirt", 2048, 1536),
  item("741.jpeg", "Hauling & Fleet", "Gravel Dump Truck Tipping", 4080, 3072),
  item("756.jpeg", "Hauling & Fleet", "Dump Truck Unloading Gravel", 1440, 1440),
  item("758.jpeg", "Hauling & Fleet", "Fresh Gravel Pile Dumped", 1440, 1440),
  item("84.jpeg", "Hauling & Fleet", "Fleet Trucks On Site", 4032, 3024),
];

export const galleryCategories: string[] = [
  "All",
  ...Array.from(new Set(galleryItems.map((i) => i.category))),
];
