type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  icon?: string;
  isCategory?: boolean;
  showCartBadge?: boolean; // ✅ Add this property
  submenu?: Menu[];
};
const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
    icon: "🏠",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
    icon: "ℹ️",
  },
  {
    id: 33,
    title: "Cart",
    path: "/cart",
    newTab: false,
    icon: "🛒",
    showCartBadge: true,
  },
  {
    id: 3,
    title: "Wishlist",
    path: "/wishlist",
    newTab: false,
    icon: "❤️",
  },
  {
    id: 4,
    title: "Products",
    newTab: false,
    icon: "📂",
    isCategory: true,  // Mark Category as a special type
    submenu: [
      
        { id: 41, title: "Smartphone", path: "/products/smartphones", newTab: false,icon: "📱" },
        { id: 42, title: "Smartwatch", path: "/products/smartwatches", newTab: false,icon: "⌚" },
        { id: 43, title: "PC Components", path: "/products/pc-components", newTab: false,icon: "🖥️" },
        { id: 44, title: "Laptop", path: "/products/laptops", newTab: false,icon: "💻" },
        { id: 45, title: "Headsets", path: "/products/headsets",newTab: false, icon: "🎧" },
        { id: 46, title: "Cameras", path: "/products/cameras",newTab: false, icon: "📷" },
        { id: 47, title: "All Gadgets", path: "/products/all-gadgets",newTab: false, icon: "🔌" },
      ],
  },
  {
    id: 6,
    title: "Customize PC",
    path: "/custom-pc",
    newTab: false,
    icon: "🛠️",
  }
];

export default menuData;
