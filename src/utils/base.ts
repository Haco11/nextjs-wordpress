import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getPage = async (uri: any) => {
  const params = {
    query: `query PageQuery($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Page {
          id
          title
          blocks
        }
      }
    }
  `,
    variables: {
      uri,
    },
  };
  const response = await fetch(`${process.env.WP_GRAPHQL_URL}`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data }: any = await response.json();
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);
  return {
    title: data.nodeByUri.title,
    blocks,
  };
};
