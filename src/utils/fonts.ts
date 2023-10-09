export const getTextAlign = (textAlign: string = "left"): string => {
  const textAlignMap: Record<string, string> = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };
  return `${textAlignMap[textAlign] || ""}`;
};

export const getFontSizeForHeading = (level: number): string => {
  const fontSizeMap: Record<number, string> = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };
  return `${fontSizeMap[level] || ""}`;
};
