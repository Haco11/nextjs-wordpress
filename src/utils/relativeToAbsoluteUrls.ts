export const relativeToAbsoluteUrls = (htmlString = "") => {
  const baseUrl = process.env.NEXT_PUBLIC_WP_URL || "";
  return htmlString.split(baseUrl).join("");
};
