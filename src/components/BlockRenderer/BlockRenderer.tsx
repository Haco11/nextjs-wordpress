import { Cover } from "../Cover";

export const BlockRenderer = ({ blocks }: any) => {
  return blocks.map((block: any) => {
    switch (block.name) {
      case "core/cover": {
        return (
          <Cover key={block.id} background={block.attributes.url}>
            core cover
          </Cover>
        );
      }
      default:
        return null;
    }
  });
};
