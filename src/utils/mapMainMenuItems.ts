export const mapMainMenuItems = (menuItems: any) => {
  return menuItems.map((item: any) => ({
    id: item.menuItem.destination.id,
    destination: item.menuItem.destination?.uri,
    label: item.menuItem.label,
    subMenuItems: (item.items || []).map((subItem: any) => ({
      id: subItem.destination.id,
      destination: subItem.destination?.uri,
      label: subItem.label,
    })),
  }));
};
