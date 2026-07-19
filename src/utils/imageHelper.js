/**
 * Helper to automatically resolve image path based on title/category
 * or use a fallback if the image is missing or broken.
 */

export const getCulturalImage = (item) => {
  if (!item) return "/placeholder-culture.jpg";

  // If the image is a valid local path (not starting with http and not empty), keep it
  if (item.image && !item.image.startsWith("http") && item.image !== "") {
    return item.image;
  }

  // Normalize title
  const title = item.title?.toLowerCase() || "";

  // Auto-matching logic for known cultural items
  if (title.includes("kecapi suling") || title.includes("kacapi suling")) return "/kecap suling.jpg";
  if (title.includes("ketuk tilu")) return "/tari-ketuk-tilu.jpg";
  if (title.includes("reak")) return "/reak.jpg";
  if (title.includes("benjang")) return "/benjang.jpg";
  if (title.includes("calung")) return "/calung.jpg";
  if (title.includes("botram")) return "/botram.jpg";
  if (title.includes("seren taun")) return "/seren taun1.jpg";
  if (title.includes("munggahan")) return "/munggahan1.jpg";
  if (title.includes("nyaneut")) return "/nyaneut1.jpg";
  if (title.includes("nenjrag bumi")) return "/nenjrag bumi.jpg";
  if (title.includes("leuwung kolot") || title.includes("leung solot")) return "/leung solot1.jpg";
  if (title.includes("sisingaan")) return "/sisingan.jpg";
  if (title.includes("longser")) return "/longser'.jpg";
  if (title.includes("merak")) return "/merak-sunda.jpg";
  if (title.includes("angklung")) return "/angklung.jpg";
  if (title.includes("wayang golek")) return "/wayang golek.jpg";
  if (title.includes("jaipong")) return "/jaipong.jpg";
  if (title.includes("kuda renggeng")) return "/kuda-renggeng.jpg";

  // Check food items
  if (title.includes("batagor")) return "/MAKANAN/batagor.webp";
  if (title.includes("mie kocok")) return "/MAKANAN/mie-kocok.webp";
  if (title.includes("seblak")) return "/MAKANAN/seblak.png";
  if (title.includes("surabi")) return "/MAKANAN/surabi.webp";
  if (title.includes("peuyeum")) return "/MAKANAN/peuyeum.webp";
  if (title.includes("cuanki")) return "/MAKANAN/cuanki.webp";
  if (title.includes("gempol")) return "/MAKANAN/gempol.png";
  if (title.includes("bolen")) return "/MAKANAN/bolen.jpg";
  if (title.includes("brownies")) return "/brownies.webp";
  if (title.includes("lumpia basah")) return "/MAKANAN/lumpia-basah.jpg";

  // Fallback to online unsplash image or placeholder depending on category
  if (item.category === "Kuliner") {
    return "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"; // Food placeholder
  }
  return "https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=800&q=80"; // Culture/art placeholder
};

/**
 * Helper to automatically resolve or construct gallery images
 */
export const getCulturalGallery = (item) => {
  if (!item) return [];

  // If gallery exists and has valid local paths, return it
  if (item.gallery && item.gallery.length > 0) {
    return item.gallery.map(img => {
      if (img && !img.startsWith("http")) return img;
      return img;
    });
  }

  // Normalize title
  const title = item.title?.toLowerCase() || "";

  // Auto-generate gallery if we have known second images in public
  if (title.includes("botram")) return ["/botram.jpg", "/botram2.jpg"];
  if (title.includes("seren taun")) return ["/seren taun1.jpg", "/seren taun2.jpg"];
  if (title.includes("munggahan")) return ["/munggahan1.jpg", "/munggahan2.jpg"];
  if (title.includes("nyaneut")) return ["/nyaneut1.jpg", "/nyaneut2.jpg"];
  if (title.includes("nenjrag bumi")) return ["/nenjrag bumi.jpg", "/nenjrag bumi2.jpg"];
  if (title.includes("leuwung kolot") || title.includes("leung solot")) return ["/leung solot1.jpg", "/leung solot2.jpg"];

  // Default gallery is just the single main image
  return [getCulturalImage(item)];
};
