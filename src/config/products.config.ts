export interface Property {
  label: string;
  description?: string;
  list?: string[];
}

export interface InfoBlock {
  label: string;
  description?: string;
  content?: Array<string | Property | InfoBlock>;
}

export interface ProductItem {
  brand: string;
  name: string;
  slug: string;
  path: string;
  basicInformations?: InfoBlock[];
}

// -----------------------------
// Utils
// -----------------------------
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

// -----------------------------
// Factories
// -----------------------------
export function createProperty(
  label: string,
  description?: string,
  list?: string[]
): Property {
  return { label, description, list };
}

export function createInfoBlock(
  label: string,
  description?: string,
  content?: Array<string | Property | InfoBlock>
): InfoBlock {
  return { label, description, content };
}

export function createProduct(
  brand: string,
  name: string,
  path: string,
  basicInformations: InfoBlock[] = []
): ProductItem {
  return {
    brand,
    name,
    slug: generateSlug(name),
    path,
    basicInformations,
  };
}

// -----------------------------
// Data
// -----------------------------
export const airConditionProducts: ProductItem[] = [
  createProduct(
    "Mitsubishi Electric",
    "Economy MSZ-HR",
    "https://storage.googleapis.com/images-instal/klima-electric.jpg",
    [
      createInfoBlock(
        "Podstawowe informacje",
        "Urządzenie ścienne MSZ-AY charakteryzuje się wysoką jakością matowej białej powierzchni...",
        [
          createInfoBlock("Zalety", undefined, [
            "SCOP do 4,8 / SEER do 8,7",
            "Klasa efektywności energetycznej do A++ / A+++",
            "Poziom hałasu (urządzenie wewnętrzne) od 19 dB(A)",
            "Wbudowany filtr V-Blocking w standardzie",
            "Wymiary (szer. / głęb. / wys.) 760 / 199 / 250 mm",
          ]),
          createInfoBlock("Właściwości", undefined, [
            createProperty("Elastyczność montażu", undefined, [
              "Dostępna wersja o wydajności chłodniczej 1,5 kW",
              "Prosty montaż nad otworem drzwiowym",
            ]),
            createProperty(
              "Filtr z jonami srebra",
              "Powłoka z zawartością jonów srebra pozwala na uzyskanie wysokiej czystości powietrza..."
            ),
            createProperty(
              "I-Save",
              "Funkcja umożliwiająca zapamiętywanie preferowanych ustawień trybu pracy..."
            ),
          ]),
        ]
      ),
    ]
  ),
  createProduct(
    "Mitsubishi Electric",
    "Diamond MSZ-LN",
    "https://storage.googleapis.com/images-instal/klima-diamond.jpg"
  ),
  createProduct(
    "Mitsubishi Electric",
    "Premium MSZ-EF",
    "https://storage.googleapis.com/images-instal/klima-premium.png"
  ),
];

// export const airConditionProducts = {
//   0: {
//     id: 0,
//     name: "Air Conditioners",
//     childIds: [1, 2, 3],
//   },
//   1: {
//     id: 1,
//     name: "Mitsubishi Electric Economy MSZ-HR",
//     path: "https://storage.googleapis.com/images-instal/klima-electric.jpg",
//     basicInformations: [
//       {
//         label: "Podstawowe informacje",
//         description:
//           "Urządzenie ścienne MSZ-AY charakteryzuje się wysoką jakością matowej białej powierzchni...",
//         content: [
//           {
//             label: "Zalety",
//             content: [
//               "SCOP do 4,8 / SEER do 8,7",
//               "Klasa efektywności energetycznej do A++ / A+++",
//               "Poziom hałasu (urządzenie wewnętrzne) od 19 dB(A)",
//             ],
//           },
//           {
//             label: "Właściwości",
//             content: [
//               {
//                 label: "Elastyczność montażu",
//                 list: ["Dostępna wersja o wydajności chłodniczej 1,5 kW", "Prosty montaż nad otworem drzwiowym"],
//               },
//               { label: "Filtr z jonami srebra", description: "Powłoka z jonami srebra zapewnia wysoką czystość powietrza" },
//               { label: "I-Save", description: "Funkcja umożliwia zapamiętywanie preferowanych ustawień trybu pracy" },
//             ],
//           },
//         ],
//       },
//     ],
//     childIds: [],
//   },
//   2: {
//     id: 2,
//     name: "Mitsubishi Electric Diamond MSZ-LN",
//     path: "https://storage.googleapis.com/images-instal/klima-diamond.jpg",
//     basicInformations: [],
//     childIds: [],
//   },
//   3: {
//     id: 3,
//     name: "Mitsubishi Electric Premium MSZ-EF",
//     path: "https://storage.googleapis.com/images-instal/klima-premium.png",
//     basicInformations: [],
//     childIds: [],
//   },
// };

export default airConditionProducts;