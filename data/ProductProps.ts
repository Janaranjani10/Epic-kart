export interface ProductProps {
    id: number;
    name: string;
    price: number;
    brand: string;
    ram: string;
    storage: string;
    battery: string;
    network: string;
    image: string;
    darkMode?: boolean; // ✅ Optional dark mode support
  }
  