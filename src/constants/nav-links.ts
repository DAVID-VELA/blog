interface navLinks {
  path: string;
  routeName: string;
}
export const NAV_LINKS: navLinks[] = [
  {
    path: "/",
    routeName: "Inicio",
  },
  {
    path: "/about",
    routeName: "Sobre mi",
  },
  {
    path: "/blog",
    routeName: "Blog",
  },
  {
    path: "/tags",
    routeName: "Tags",
    },
  
];
export default NAV_LINKS;
