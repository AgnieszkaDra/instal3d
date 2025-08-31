export class Property {
  label: string;
  description?: string;
  list?: string[];

  constructor(label: string, description?: string, list?: string[]) {
    this.label = label;
    this.description = description;
    this.list = list;
  }
}

export class InfoBlock {
  label: string;
  description?: string;
  content?: Array<string | Property>;

  constructor(label: string, description?: string, content?: Array<string | Property>) {
    this.label = label;
    this.description = description;
    this.content = content;
  }

  get hasContent(): boolean {
    return !!this.content?.length;
  }
}

export interface ProductItem {
  brand: string;
  name: string;
  slug: string;
  path: string;
  basicInformations?: InfoBlock[];
}

function generateSlug(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
}

export class Product implements ProductItem {
  brand: string;
  name: string;
  slug: string;
  path: string;
  basicInformations: InfoBlock[];

  constructor(
    brand: string,
    name: string,
    path: string,
    basicInformations: InfoBlock[] = []
  ) {
    this.brand = brand;
    this.name = name;
    this.slug = generateSlug(name);
    this.path = path;
    this.basicInformations = basicInformations;
  }

  get fullName(): string {
    return `${this.brand} - ${this.name}`;
  }

  get url(): string {
    return `/products/${this.slug}`;
  }
}

export const airConditionProducts: Product[] = [
  new Product(
    "Mitsubishi Electric",
    "Economy MSZ-HR",
    "https://storage.googleapis.com/images-instal/klima-electric.jpg",
    [
      new InfoBlock(
        "Podstawowe informacje",
        "Urządzenie ścienne MSZ-AY charakteryzuje się wysoką jakością matowej białej powierzchni. Dzięki zaokrąglonym krawędziom i kompaktowej obudowie dyskretnie wpasowuje się w każde pomieszczenie. Przy niskim poziomie ciśnienia akustycznego (18 dB(A)) jest wyjątkowo ciche. W trybie nocnym dźwięki robocze są stłumione, oświetlenie przyciemnione, a jednostka zewnętrzna pracuje o 3 dB(A) ciszej. Urządzenie jest standardowo wyposażone w filtr V-blocking.",
        [
          new InfoBlock("Zalety", undefined, [
            "SCOP do 4,8 / SEER do 8,7",
            "Klasa efektywności energetycznej do A++ / A+++",
            "Poziom hałasu (urządzenie wewnętrzne) od 19 dB(A)",
            "Wbudowany filtr V-Blocking w standardzie",
            "Wymiary (szer. / głęb. / wys.) 760 / 199 / 250 mm",
          ]),
          new InfoBlock("Właściwości", undefined, [
            new Property("Elastyczność montażu", undefined, [
              "Dostępna wersja o wydajności chłodniczej 1,5 kW",
              "Prosty montaż nad otworem drzwiowym",
            ]),
            new Property(
              "Filtr z jonami srebra",
              "Powłoka z zawartością jonów srebra pozwala na uzyskanie wysokiej czystości powietrza..."
            ),
            new Property(
              "I-Save",
              "Funkcja umożliwiająca zapamiętywanie preferowanych ustawień trybu pracy..."
            ),
          ]),
        ]
      ),
    ]
  ),
  new Product(
    "Mitsubishi Electric",
    "Diamond MSZ-LN",
    "https://storage.googleapis.com/images-instal/klima-diamond.jpg"
  ),
  new Product(
    "Mitsubishi Electric",
    "Premium MSZ-EF",
    "https://storage.googleapis.com/images-instal/klima-premium.png"
  ),
];