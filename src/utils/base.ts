export const getPage = async () => {
  const params = {
    query: `query NewQuery {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          blocks
        }
      }
    }
  `,
  };
  const response = await fetch(`${process.env.WP_GRAPHQL_URL}`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data }: any = await response.json();
  return data.nodeByUri.blocks;
};
