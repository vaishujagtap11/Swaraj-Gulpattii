import peanuts from "../assets/peanuts.jpeg";
import til from "../assets/til.jpeg";
import coconut from "../assets/coconut.jpeg";
import javas from "../assets/javas.jpeg";
import crushed from "../assets/crushed.jpg";
import dryfruit from "../assets/dryfruit.jpeg";

import jaggeryPowder from "../assets/jaggery-powder.jpg";
import jaggeryMold from "../assets/jaggery-mold.jpg";
import jaggeryCubes from "../assets/jaggery-cubes.jpg";
import kakvi from "../assets/kakvi.jpg";

export const products = [
  // 🔸 CHIKKI SECTION
  {
    id: 1,
    name: "Peanuts Chikki",
    description: "Classic crunchy peanut jaggery chikki",
    pricePerUnit: 180, // per Kg
    image: peanuts,
    units: ["1 Kg", "1/2 Kg", "1/4 Kg"],
    category: "Chikki",
  },
  {
    id: 2,
    name: "Til Chikki",
    description: "Healthy sesame seeds chikki",
    pricePerUnit: 200,
    image: til,
    units: ["1 Kg", "1/2 Kg", "1/4 Kg"],
    category: "Chikki",
  },
  {
    id: 3,
    name: "Coconut Chikki",
    description: "Traditional coconut jaggery chikki",
    pricePerUnit: 220,
    image: coconut,
    units: ["1 Kg", "1/2 Kg", "1/4 Kg"],
    category: "Chikki",
  },
  {
    id: 4,
    name: "Javas Chikki",
    description: "Nutritious flax seed jaggery chikki",
    pricePerUnit: 210,
    image: javas,
    units: ["1 Kg", "1/2 Kg", "1/4 Kg"],
    category: "Chikki",
  },
  {
    id: 6,
    name: "Crushed Chikki",
    description: "Easy-to-eat crushed jaggery chikki",
    pricePerUnit: 190,
    image: crushed,
    units: ["1 Kg", "1/2 Kg", "1/4 Kg"],
    category: "Chikki",
  },
  {
    id: 7,
    name: "Dry Fruit Chikki",
    description: "Premium dry fruits with pure jaggery",
    pricePerUnit: 350,
    image: dryfruit,
    units: ["1 Kg", "1/2 Kg", "1/4 Kg"],
    category: "Chikki",
  },

  // 🔸 OTHERS SECTION
  {
    id: 10,
    name: "Jaggery Powder",
    description: "Natural sugar substitute for daily use",
    pricePerUnit: 90,
    image: jaggeryPowder,
    units: ["1 Kg", "1/2 Kg", "1/4 Kg"],
    category: "Others",
  },
  {
    id: 11,
    name: "Jaggery Mold",
    description: "Traditional solid jaggery mold",
    pricePerUnit: 85,
    image: jaggeryMold,
    units: ["1 Kg", "1/2 Kg", "1/4 Kg"],
    category: "Others",
  },
  {
    id: 12,
    name: "Jaggery Cubes",
    description: "Small jaggery cubes for daily use",
    pricePerUnit: 80,
    image: jaggeryCubes,
    units: ["1 Kg", "1/2 Kg", "1/4 Kg"],
    category: "Others",
  },
  {
    id: 13,
    name: "Liquid Jaggery (Kakvi)",
    description: "Pure liquid jaggery made traditionally",
    pricePerUnit: 120, // per Liter
    image: kakvi,
    units: ["1 Liter", "500 ml", "250 ml"],
    category: "Others",
  },
];
