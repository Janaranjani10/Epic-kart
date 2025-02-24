import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "₹1,59,000",
    image: "/images/iphone 15 pro.png",
  },
  {
    id: 2,
    name: "AirPods Gen2",
    price: "₹7,999",
    image: "/images/appleairpods.png",
  },
  {
    id: 3,
    name: "Legion 5",
    price: "₹1,35,000",
    image: "/images/lenovo.jpg",
  },
  {
    id: 4,
    name: "Samsung S9 Tab",
    price: "₹67,000",
    image: "/images/s9.png",
  },
  { 
    id: 5, 
    name: "Noise Smart Watch", 
    image: "/images/w1.png", 
    price: "3,999" 
  },
  { 
    id: 6, 
    name: "Samsung Odyssey G3", 
    image: "/images/odysey.png", 
    price: "10,000" 
  },
  { 
    id: 7, 
    name: "ROG Phone 9", 
    image: "/images/rog.png", 
    price: "89,599" 
  },
  { 
    id: 8, 
    name: "Cosmic Headphone", 
    image: "/images/cosmic.jpg", 
    price: "8,799" 
  },
];

const ProductCard = ({ product }: { product: { id: number; name: string; price: string; image: string } }) => {
  return (
    <div className="bg-white dark:bg-black shadow-lg rounded-xl p-4 transition-transform transform hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-52 object-contain" />
      <h3 className="text-lg font-semibold mt-3 text-center text-black dark:text-white">{product.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300 text-center">COD and No cost EMI applicable.</p>
      <div className="flex justify-center my-2">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-yellow text-lg">★</span>
          ))}
      </div>
      <div className="flex justify-between items-center px-3">
        <span className="text-xl font-bold text-black dark:text-white">{product.price}</span>
        <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
          <FaShoppingCart className="text-lg text-gray-700 dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-6 min-h-screen transition-colors">
  <div className="flex justify-center items-center">
    <h2 className="text-3xl font-bold text-center text-blue-900">
      PRODUCTS
    </h2>
  </div>
  <div className=" h-1 bg-yellow mx-auto mt-2"></div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>

  );
}