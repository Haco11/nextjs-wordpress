export const getPage = async () => {
  const params = {
    query: `query NewQuery {
        pages {
          nodes {
            title
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
  const { data } = await response.json();
  return { data };
};
