export interface navLinks {
  id?: number;
  path: string;
  text: string;
}

export const navLinksTextsAndPaths: navLinks[] = [
  {
    id: 0,
    path: "/",
    text: "Home",
  },
  {
    id: 1,
    path: "/Storages",
    text: "Storages",
  },
  {
    id: 2,
    path: "/About",
    text: "About",
  },
];

export const title: string = "Our Warehouse";
