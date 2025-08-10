export type Brand = { name: string, site?: string };
export type Category = { name: string, brands: Brand[] };

export const categories: Category[] = [
  {
    name: "Active Components",
    brands: [
      { name: "Infineon" }, { name: "STMicroelectronics" }, { name: "NXP" },
      { name: "Texas Instruments" }, { name: "Analog Devices" }, { name: "Microchip" }
    ]
  },
  {
    name: "Passive Components",
    brands: [
      { name: "Murata" }, { name: "Yageo" }, { name: "Vishay" }, { name: "TDK" }, { name: "Samsung Electro-Mechanics" }
    ]
  },
  {
    name: "Connectors & Electro-Mechanical",
    brands: [
      { name: "TE Connectivity" }, { name: "Molex" }, { name: "Amphenol" }
    ]
  },
  {
    name: "Power & Battery",
    brands: [
      { name: "Mean Well" }, { name: "TDK-Lambda" }
    ]
  },
  {
    name: "Memory & Storage",
    brands: [
      { name: "Micron" }, { name: "Kioxia" }, { name: "Winbond" }
    ]
  }
];
