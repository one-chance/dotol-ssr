type SubMenu = {
  name: string;
  path: string;
};

export type Menu = {
  category: string;
  menu: SubMenu[];
};
