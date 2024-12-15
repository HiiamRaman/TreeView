
const menus = [
  {
    name: "Home",
    link: "/home",
    subMenu: []
  },
  {
    name: "Shop",
    link: "/shop",
    subMenu: [
      {
        name: "Men's Clothing",
        link: "/shop/men",
        subMenu: [
          { name: "Shirts", link: "/shop/men/shirts" },
          { name: "Pants", link: "/shop/men/pants" }
        ]
      },
      {
        name: "Women's Clothing",
        link: "/shop/women",
        subMenu: [
          { name: "Dresses", link: "/shop/women/dresses" },
          { name: "Tops", link: "/shop/women/tops" }
        ]
      },
      {
        name: "Accessories",
        link: "/shop/accessories",
        subMenu: []
      }
    ]
  },
  {
    name: "Categories",
    link: "/categories",
    subMenu: [
      { name: "New Arrivals", link: "/categories/new-arrivals" },
      { name: "Best Sellers", link: "/categories/best-sellers" },
      { name: "Sale", link: "/categories/sale" }
    ]
  },
  {
    name: "About Us",
    link: "/about-us",
    subMenu: []
  },
  {
    name: "Contact",
    link: "/contact",
    subMenu: []
  }
];
 export default menus;
