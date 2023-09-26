export const BlockRenderer = ({ blocks }: any) => {
  return blocks.map((block: any) => {
    switch (block.name) {
      case "core/cover": {
        return "core/cover";
      }
      default:
        return null;
    }
  });
};
