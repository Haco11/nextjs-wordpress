export const BlockRenderer = ({ blocks }: any) => {
  return blocks.map((block: any) => {
    switch (block.name) {
      case "core/cover": {
        return <div key={block.id}> core cover </div>;
      }
      default:
        return null;
    }
  });
};
