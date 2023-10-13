import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import { mapMainMenuItems } from "./mapMainMenuItems";

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
      acfOptionsMainMenu {
        mainMenu {
          callToActionButton {
            destination {
              ... on Page {
                id
                uri
              }
            }
            label
          }
          menuItems {
            menuItem {
              destination {
                ... on Page {
                  id
                  uri
                }
              }
              label
            }
            items {
              destination {
                ... on Page {
                  id
                  uri
                }
              }
              label
            }
          }
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
  if (!data.nodeByUri) {
    return null;
  }
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);
  return {
    title: data.nodeByUri.title,
    mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
    callToActionDestination:
      data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
    callToActionLabel:
      data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
    blocks,
  };
};
