import { getFontSizeForHeading, getTextAlign } from "@/utils/fonts";
import React from "react";

export const Heading = ({ textAlign, content, level = 2 }: any) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-3xl mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });
  return tag;
};
