import { NextResponse } from "next/server";

// Sample Data (Replace this with actual JSON from your CSV)
const pcData = [

    {
        "Product Name":"Desktop Model 1",
        "CPU":"AMD Ryzen 5 7600X",
        "GPU":"Intel Arc A750",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":105000
    },
    {
        "Product Name":"Desktop Model 2",
        "CPU":"AMD Ryzen 7 7700X",
        "GPU":"NVIDIA RTX 4090",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":315000
    },
    {
        "Product Name":"Desktop Model 3",
        "CPU":"Intel Core i7-13700K",
        "GPU":"AMD Radeon RX 7600",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":145000
    },
    {
        "Product Name":"Desktop Model 4",
        "CPU":"Intel Core i7-13700K",
        "GPU":"NVIDIA RTX 4070 Ti",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":255000
    },
    {
        "Product Name":"Desktop Model 5",
        "CPU":"Intel Core i3-12100F",
        "GPU":"AMD Radeon RX 7600",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":135000
    },
    {
        "Product Name":"Desktop Model 6",
        "CPU":"Intel Core i9-13900K",
        "GPU":"NVIDIA RTX 4070 Ti",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":185000
    },
    {
        "Product Name":"Desktop Model 7",
        "CPU":"AMD Ryzen 3 5300G",
        "GPU":"AMD Radeon RX 7800 XT",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":155000
    },
    {
        "Product Name":"Desktop Model 8",
        "CPU":"AMD Ryzen 3 5300G",
        "GPU":"AMD Radeon RX 7900 XTX",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":255000
    },
    {
        "Product Name":"Desktop Model 9",
        "CPU":"Intel Core i9-13900K",
        "GPU":"Intel Arc A750",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":145000
    },
    {
        "Product Name":"Desktop Model 10",
        "CPU":"AMD Ryzen 9 7950X",
        "GPU":"NVIDIA RTX 4090",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":140000
    },
    {
        "Product Name":"Desktop Model 11",
        "CPU":"AMD Ryzen 3 5300G",
        "GPU":"NVIDIA RTX 4060",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":180000
    },
    {
        "Product Name":"Desktop Model 12",
        "CPU":"AMD Ryzen 7 7700X",
        "GPU":"NVIDIA RTX 4080",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":220000
    },
    {
        "Product Name":"Desktop Model 13",
        "CPU":"AMD Ryzen 7 7700X",
        "GPU":"NVIDIA RTX 4070 Ti",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":230000
    },
    {
        "Product Name":"Desktop Model 14",
        "CPU":"AMD Ryzen 7 7700X",
        "GPU":"AMD Radeon RX 7700 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":145000
    },
    {
        "Product Name":"Desktop Model 15",
        "CPU":"Intel Core i3-12100F",
        "GPU":"NVIDIA RTX 4070 Ti",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":105000
    },
    {
        "Product Name":"Desktop Model 16",
        "CPU":"AMD Ryzen 9 7950X",
        "GPU":"Intel Arc A750",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":310000
    },
    {
        "Product Name":"Desktop Model 17",
        "CPU":"Intel Core i9-13900K",
        "GPU":"AMD Radeon RX 7800 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":50000
    },
    {
        "Product Name":"Desktop Model 18",
        "CPU":"AMD Ryzen 5 7600X",
        "GPU":"AMD Radeon RX 7900 XTX",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":170000
    },
    {
        "Product Name":"Desktop Model 19",
        "CPU":"AMD Ryzen 3 5300G",
        "GPU":"AMD Radeon RX 7600",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":60000
    },
    {
        "Product Name":"Desktop Model 20",
        "CPU":"AMD Ryzen 3 5300G",
        "GPU":"NVIDIA RTX 4070 Ti",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":255000
    },
    {
        "Product Name":"Desktop Model 21",
        "CPU":"AMD Ryzen 7 7700X",
        "GPU":"NVIDIA RTX 4060",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":85000
    },
    {
        "Product Name":"Desktop Model 22",
        "CPU":"AMD Ryzen 7 7700X",
        "GPU":"AMD Radeon RX 7800 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":225000
    },
    {
        "Product Name":"Desktop Model 23",
        "CPU":"Intel Core i9-13900K",
        "GPU":"AMD Radeon RX 7900 XTX",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":110000
    },
    {
        "Product Name":"Desktop Model 24",
        "CPU":"AMD Ryzen 5 7600X",
        "GPU":"NVIDIA RTX 4080",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":130000
    },
    {
        "Product Name":"Desktop Model 25",
        "CPU":"Intel Core i5-13600K",
        "GPU":"AMD Radeon RX 7600",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":265000
    },
    {
        "Product Name":"Desktop Model 26",
        "CPU":"AMD Ryzen 5 7600X",
        "GPU":"NVIDIA RTX 4060",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":240000
    },
    {
        "Product Name":"Desktop Model 27",
        "CPU":"Intel Core i7-13700K",
        "GPU":"Intel Arc A770",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":345000
    },
    {
        "Product Name":"Desktop Model 28",
        "CPU":"Intel Core i5-13600K",
        "GPU":"NVIDIA RTX 4090",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":230000
    },
    {
        "Product Name":"Desktop Model 29",
        "CPU":"Intel Core i9-13900K",
        "GPU":"AMD Radeon RX 7800 XT",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":100000
    },
    {
        "Product Name":"Desktop Model 30",
        "CPU":"Intel Core i5-13600K",
        "GPU":"NVIDIA RTX 4070 Ti",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":120000
    },
    {
        "Product Name":"Desktop Model 31",
        "CPU":"Intel Core i5-13600K",
        "GPU":"NVIDIA RTX 4090",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":335000
    },
    {
        "Product Name":"Desktop Model 32",
        "CPU":"Intel Core i7-13700K",
        "GPU":"AMD Radeon RX 7900 XTX",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":290000
    },
    {
        "Product Name":"Desktop Model 33",
        "CPU":"Intel Core i9-13900K",
        "GPU":"NVIDIA RTX 4090",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":315000
    },
    {
        "Product Name":"Desktop Model 34",
        "CPU":"Intel Core i9-13900K",
        "GPU":"AMD Radeon RX 7600",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":140000
    },
    {
        "Product Name":"Desktop Model 35",
        "CPU":"AMD Ryzen 9 7950X",
        "GPU":"AMD Radeon RX 7800 XT",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":270000
    },
    {
        "Product Name":"Desktop Model 36",
        "CPU":"Intel Core i7-13700K",
        "GPU":"Intel Arc A750",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":285000
    },
    {
        "Product Name":"Desktop Model 37",
        "CPU":"Intel Core i9-13900K",
        "GPU":"Intel Arc A750",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":290000
    },
    {
        "Product Name":"Desktop Model 38",
        "CPU":"Intel Core i3-12100F",
        "GPU":"NVIDIA RTX 4070 Ti",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":110000
    },
    {
        "Product Name":"Desktop Model 39",
        "CPU":"Intel Core i3-12100F",
        "GPU":"NVIDIA RTX 4060",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":240000
    },
    {
        "Product Name":"Desktop Model 40",
        "CPU":"Intel Core i5-13600K",
        "GPU":"NVIDIA RTX 4090",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":310000
    },
    {
        "Product Name":"Desktop Model 41",
        "CPU":"Intel Core i9-13900K",
        "GPU":"AMD Radeon RX 7700 XT",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":160000
    },
    {
        "Product Name":"Desktop Model 42",
        "CPU":"AMD Ryzen 7 7700X",
        "GPU":"AMD Radeon RX 7700 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":265000
    },
    {
        "Product Name":"Desktop Model 43",
        "CPU":"AMD Ryzen 9 7950X",
        "GPU":"Intel Arc A770",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":235000
    },
    {
        "Product Name":"Desktop Model 44",
        "CPU":"Intel Core i7-13700K",
        "GPU":"Intel Arc A750",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":275000
    },
    {
        "Product Name":"Desktop Model 45",
        "CPU":"Intel Core i5-13600K",
        "GPU":"AMD Radeon RX 7600",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":185000
    },
    {
        "Product Name":"Desktop Model 46",
        "CPU":"AMD Ryzen 3 5300G",
        "GPU":"AMD Radeon RX 7800 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":245000
    },
    {
        "Product Name":"Desktop Model 47",
        "CPU":"Intel Core i5-13600K",
        "GPU":"NVIDIA RTX 4060",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":330000
    },
    {
        "Product Name":"Desktop Model 48",
        "CPU":"Intel Core i5-13600K",
        "GPU":"Intel Arc A770",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":310000
    },
    {
        "Product Name":"Desktop Model 49",
        "CPU":"AMD Ryzen 7 7700X",
        "GPU":"AMD Radeon RX 7900 XTX",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":50000
    },
    {
        "Product Name":"Desktop Model 50",
        "CPU":"AMD Ryzen 7 7700X",
        "GPU":"Intel Arc A750",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":230000
    },
    {
        "Product Name":"Desktop Model 51",
        "CPU":"AMD Ryzen 3 5300G",
        "GPU":"NVIDIA RTX 4070 Ti",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":130000
    },
    {
        "Product Name":"Desktop Model 52",
        "CPU":"AMD Ryzen 9 7950X",
        "GPU":"NVIDIA RTX 4090",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":120000
    },
    {
        "Product Name":"Desktop Model 53",
        "CPU":"Intel Core i7-13700K",
        "GPU":"NVIDIA RTX 4080",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":260000
    },
    {
        "Product Name":"Desktop Model 54",
        "CPU":"Intel Core i3-12100F",
        "GPU":"NVIDIA RTX 4090",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":140000
    },
    {
        "Product Name":"Desktop Model 55",
        "CPU":"Intel Core i7-13700K",
        "GPU":"NVIDIA RTX 4060",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":290000
    },
    {
        "Product Name":"Desktop Model 56",
        "CPU":"AMD Ryzen 9 7950X",
        "GPU":"AMD Radeon RX 7700 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":195000
    },
    {
        "Product Name":"Desktop Model 57",
        "CPU":"AMD Ryzen 5 7600X",
        "GPU":"NVIDIA RTX 4060",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":70000
    },
    {
        "Product Name":"Desktop Model 58",
        "CPU":"Intel Core i9-13900K",
        "GPU":"NVIDIA RTX 4080",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":95000
    },
    {
        "Product Name":"Desktop Model 59",
        "CPU":"AMD Ryzen 7 7700X",
        "GPU":"AMD Radeon RX 7900 XTX",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":245000
    },
    {
        "Product Name":"Desktop Model 60",
        "CPU":"AMD Ryzen 9 7950X",
        "GPU":"AMD Radeon RX 7900 XTX",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":205000
    },
    {
        "Product Name":"Desktop Model 61",
        "CPU":"Intel Core i3-12100F",
        "GPU":"AMD Radeon RX 7700 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":280000
    },
    {
        "Product Name":"Desktop Model 62",
        "CPU":"AMD Ryzen 3 5300G",
        "GPU":"Intel Arc A750",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":330000
    },
    {
        "Product Name":"Desktop Model 63",
        "CPU":"AMD Ryzen 5 7600X",
        "GPU":"NVIDIA RTX 4080",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":70000
    },
    {
        "Product Name":"Desktop Model 64",
        "CPU":"Intel Core i9-13900K",
        "GPU":"Intel Arc A750",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":115000
    },
    {
        "Product Name":"Desktop Model 65",
        "CPU":"AMD Ryzen 3 5300G",
        "GPU":"Intel Arc A750",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":305000
    },
    {
        "Product Name":"Desktop Model 66",
        "CPU":"Intel Core i5-13600K",
        "GPU":"NVIDIA RTX 4070 Ti",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":260000
    },
    {
        "Product Name":"Desktop Model 67",
        "CPU":"AMD Ryzen 7 7700X",
        "GPU":"AMD Radeon RX 7700 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":110000
    },
    {
        "Product Name":"Desktop Model 68",
        "CPU":"AMD Ryzen 7 7700X",
        "GPU":"AMD Radeon RX 7800 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":100000
    },
    {
        "Product Name":"Desktop Model 69",
        "CPU":"Intel Core i5-13600K",
        "GPU":"AMD Radeon RX 7600",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":250000
    },
    {
        "Product Name":"Desktop Model 70",
        "CPU":"Intel Core i9-13900K",
        "GPU":"AMD Radeon RX 7800 XT",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":305000
    },
    {
        "Product Name":"Desktop Model 71",
        "CPU":"AMD Ryzen 5 7600X",
        "GPU":"NVIDIA RTX 4080",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":230000
    },
    {
        "Product Name":"Desktop Model 72",
        "CPU":"AMD Ryzen 9 7950X",
        "GPU":"NVIDIA RTX 4070 Ti",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":220000
    },
    {
        "Product Name":"Desktop Model 73",
        "CPU":"Intel Core i9-13900K",
        "GPU":"NVIDIA RTX 4080",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":315000
    },
    {
        "Product Name":"Desktop Model 74",
        "CPU":"AMD Ryzen 7 7700X",
        "GPU":"AMD Radeon RX 7800 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":70000
    },
    {
        "Product Name":"Desktop Model 75",
        "CPU":"Intel Core i3-12100F",
        "GPU":"Intel Arc A770",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":285000
    },
    {
        "Product Name":"Desktop Model 76",
        "CPU":"AMD Ryzen 5 7600X",
        "GPU":"AMD Radeon RX 7700 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":325000
    },
    {
        "Product Name":"Desktop Model 77",
        "CPU":"Intel Core i5-13600K",
        "GPU":"AMD Radeon RX 7800 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":75000
    },
    {
        "Product Name":"Desktop Model 78",
        "CPU":"AMD Ryzen 9 7950X",
        "GPU":"NVIDIA RTX 4080",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":140000
    },
    {
        "Product Name":"Desktop Model 79",
        "CPU":"AMD Ryzen 5 7600X",
        "GPU":"NVIDIA RTX 4090",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":95000
    },
    {
        "Product Name":"Desktop Model 80",
        "CPU":"Intel Core i3-12100F",
        "GPU":"NVIDIA RTX 4060",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":325000
    },
    {
        "Product Name":"Desktop Model 81",
        "CPU":"AMD Ryzen 3 5300G",
        "GPU":"AMD Radeon RX 7900 XTX",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":230000
    },
    {
        "Product Name":"Desktop Model 82",
        "CPU":"Intel Core i7-13700K",
        "GPU":"AMD Radeon RX 7900 XTX",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":255000
    },
    {
        "Product Name":"Desktop Model 83",
        "CPU":"Intel Core i9-13900K",
        "GPU":"AMD Radeon RX 7600",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":335000
    },
    {
        "Product Name":"Desktop Model 84",
        "CPU":"AMD Ryzen 3 5300G",
        "GPU":"AMD Radeon RX 7600",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":275000
    },
    {
        "Product Name":"Desktop Model 85",
        "CPU":"Intel Core i3-12100F",
        "GPU":"AMD Radeon RX 7700 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":230000
    },
    {
        "Product Name":"Desktop Model 86",
        "CPU":"AMD Ryzen 9 7950X",
        "GPU":"NVIDIA RTX 4060",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":100000
    },
    {
        "Product Name":"Desktop Model 87",
        "CPU":"Intel Core i3-12100F",
        "GPU":"NVIDIA RTX 4090",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":240000
    },
    {
        "Product Name":"Desktop Model 88",
        "CPU":"AMD Ryzen 9 7950X",
        "GPU":"NVIDIA RTX 4060",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":280000
    },
    {
        "Product Name":"Desktop Model 89",
        "CPU":"AMD Ryzen 5 7600X",
        "GPU":"NVIDIA RTX 4080",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":270000
    },
    {
        "Product Name":"Desktop Model 90",
        "CPU":"AMD Ryzen 3 5300G",
        "GPU":"NVIDIA RTX 4060",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":65000
    },
    {
        "Product Name":"Desktop Model 91",
        "CPU":"Intel Core i5-13600K",
        "GPU":"NVIDIA RTX 4080",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":180000
    },
    {
        "Product Name":"Desktop Model 92",
        "CPU":"AMD Ryzen 3 5300G",
        "GPU":"AMD Radeon RX 7600",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":180000
    },
    {
        "Product Name":"Desktop Model 93",
        "CPU":"AMD Ryzen 9 7950X",
        "GPU":"AMD Radeon RX 7900 XTX",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":95000
    },
    {
        "Product Name":"Desktop Model 94",
        "CPU":"Intel Core i3-12100F",
        "GPU":"AMD Radeon RX 7900 XTX",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":335000
    },
    {
        "Product Name":"Desktop Model 95",
        "CPU":"AMD Ryzen 5 7600X",
        "GPU":"AMD Radeon RX 7800 XT",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":310000
    },
    {
        "Product Name":"Desktop Model 96",
        "CPU":"AMD Ryzen 5 7600X",
        "GPU":"AMD Radeon RX 7900 XTX",
        "Memory Type":"DDR4",
        "System Type":"Desktop",
        "Price in Rupees":260000
    },
    {
        "Product Name":"Desktop Model 97",
        "CPU":"Intel Core i3-12100F",
        "GPU":"NVIDIA RTX 4080",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":230000
    },
    {
        "Product Name":"Desktop Model 98",
        "CPU":"AMD Ryzen 5 7600X",
        "GPU":"AMD Radeon RX 7900 XTX",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":270000
    },
    {
        "Product Name":"Desktop Model 99",
        "CPU":"AMD Ryzen 9 7950X",
        "GPU":"Intel Arc A770",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":190000
    },
    {
        "Product Name":"Desktop Model 100",
        "CPU":"Intel Core i7-13700K",
        "GPU":"NVIDIA RTX 4070 Ti",
        "Memory Type":"DDR5",
        "System Type":"Desktop",
        "Price in Rupees":130000
    }
];
export async function POST(req: Request) {
    try {
      const { budget } = await req.json();
  
      // Convert "Price in Rupees" to a common field for filtering
      const bestMatch = pcData
        .filter(pc => pc["Price in Rupees"] <= budget)
        .sort((a, b) => b["Price in Rupees"] - a["Price in Rupees"])[0];
  
      if (!bestMatch) {
        return NextResponse.json({ error: "No PC found within budget" }, { status: 404 });
      }
  
      return NextResponse.json({
        productName: bestMatch["Product Name"],
        cpu: bestMatch["CPU"],
        gpu: bestMatch["GPU"],
        memoryType: bestMatch["Memory Type"],
        systemType: bestMatch["System Type"],
        price: bestMatch["Price in Rupees"]
      }, { status: 200 });
  
    } catch (error) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
  }
  