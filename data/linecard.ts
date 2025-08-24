// data/linecard.ts
export type Brand = {
  name: string;
  logo?: string;      // /public path when you add logos later, e.g. "/logos/ti.svg"
  website?: string;
  tagline?: string;   // short descriptor (optional)
};

export type Category = {
  name: string;
  brands: Brand[];
};

export const categories: Category[] = [
  {
    name: "Semiconductors",
    brands: [
      { name: "Texas Instruments", website: "https://www.ti.com", tagline: "Analog & embedded processing" },
      { name: "Analog Devices", website: "https://www.analog.com", tagline: "Precision analog & mixed-signal" },
      { name: "Infineon", website: "https://www.infineon.com", tagline: "Power, automotive, security" },
      { name: "Nexperia", website: "https://www.nexperia.com", tagline: "Discrete, logic & MOSFETs" },
      { name: "onsemi", website: "https://www.onsemi.com", tagline: "Power & sensing technologies" },
      { name: "Renesas", website: "https://www.renesas.com", tagline: "MCUs, SoCs & analog" },
      { name: "Microchip", website: "https://www.microchip.com", tagline: "MCUs, analog, timing" },
      { name: "Skyworks", website: "https://www.skyworksinc.com", tagline: "RF solutions" },
    ],
  },
  {
    name: "Passives",
    brands: [
      { name: "KYOCERA AVX", website: "https://www.kyocera-avx.com", tagline: "Capacitors & RF components" },
      { name: "KEMET", website: "https://www.kemet.com", tagline: "Capacitors, magnetics, EMI" },
      { name: "Vishay", website: "https://www.vishay.com", tagline: "Resistors, diodes, opto" },
      { name: "Nichicon", website: "https://www.nichicon.co.jp/english/", tagline: "Aluminum & polymer capacitors" },
      { name: "Samsung Electro-Mechanics", website: "https://www.samsungsem.com", tagline: "MLCCs & passives" },
      { name: "Murata", website: "https://www.murata.com", tagline: "MLCC, filters, modules" },
    ],
  },
  {
    name: "Interconnect & Electromechanical",
    brands: [
      { name: "TE Connectivity", website: "https://www.te.com", tagline: "Connectors & sensors" },
      { name: "Littelfuse", website: "https://www.littelfuse.com", tagline: "Protection, fuses, switches" },
      { name: "Amphenol (placeholder)", website: "https://www.amphenol.com", tagline: "Connectors & cable" },
      { name: "Molex (placeholder)", website: "https://www.molex.com", tagline: "Connectors & interconnects" },
    ],
  },
  {
    name: "Timing / RF / Power",
    brands: [
      { name: "Silicon Labs (placeholder)", website: "https://www.silabs.com", tagline: "Timing & wireless" },
      { name: "Abracon (placeholder)", website: "https://abracon.com", tagline: "Crystals, oscillators, RF" },
      { name: "Qorvo (placeholder)", website: "https://www.qorvo.com", tagline: "RF front-end" },
      { name: "Power Integrations (placeholder)", website: "https://www.power.com", tagline: "Power conversion" },
    ],
  },
  {
    name: "Emerging & Specialized",
    brands: [
      { name: "STMicroelectronics", website: "https://www.st.com", tagline: "MCUs, MEMS & power" },
      { name: "Arrow (channel)", website: "https://www.arrow.com", tagline: "Global distribution partner" },
    ],
  },
];