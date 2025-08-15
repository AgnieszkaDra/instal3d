export type ProductItem = {
  brand: string;
  name: string;
  description: string;
  path: string;
  features: string[];
};

export type NavItem = {
  label: string;
  href: string;
  match: (path: string) => boolean;
  description?: string;
  children?: NavItem[];
  items?: ProductItem[] | undefined;
};

const navItems: NavItem[] = [
  {
    label: 'Oferta',
    href: '/oferta/',
    match: (path: string) => path === '/oferta/',
    children: [
      {
        label: 'Fotowoltaika',
        href: '/oferta/fotowoltaika/',
        match: (path: string) => path === '/oferta/fotowoltaika/',
        children: [
            {
            label: 'Kalkulator oszczędności',
            href: '/oferta/fotowoltaika/kalkulator',
            match: (path: string) => path === '/oferta/fotowoltaika/kalkulator',
          },
          {
            label: 'Realizacje',
            href: '/oferta/fotowoltaika/realizacje',
            match: (path: string) => path === '/oferta/fotowoltaika/realizacje',
          }
        ]
      },
      {
        label: 'Pompy ciepła',
        href: '/oferta/pompy-ciepla/',
        match: (path: string) => path === '/oferta/pompy-ciepla/',
        children: [
            {
            label: 'Kalkulator oszczędności',
            href: '/oferta/pompy-ciepla/kalkulator',
            match: (path: string) => path === '/oferta/pompy-ciepla/kalkulator',
          },
          {
            label: 'Realizacje',
            href: '/oferta/pompy-ciepla/realizacje',
            match: (path: string) => path === '/oferta/pompy-ciepla/realizacje',
          }
        ]
      },
      {
  label: 'Klimatyzacja',
  href: '/oferta/klimatyzacja/',
  match: (path: string) => path === '/oferta/klimatyzacja/',
  children: [
    {
      label: 'Realizacje',
      href: '/oferta/klimatyzacja/realizacje',
      match: (path: string) => path === '/oferta/klimatyzacja/realizacje',
    },
    {
      label: 'Produkty',
      href: '/oferta/klimatyzacja/produkty',
      description: 'Produkty Serii M firmy Mitsubishi Electric są w stanie chłodzić i ogrzewać małe oraz średnie pomieszczenia. Dzięki minimalistycznej stylistyce stapiają się harmonijnie z wystrojem pomieszczenia, pracują cicho i są bardzo energooszczędne.',
      items: [
        {
          brand: 'Mitsubishi Electric',
          name: 'Economy MSZ-HR', 
          path: "https://storage.cloud.google.com/images-instal/klima-electric.jpg",
          description: 'Urządzenie ścienne MSZ-AY charakteryzuje się wysoką jakością matowej białej powierzchni. Dzięki zaokrąglonym krawędziom i kompaktowej obudowie dyskretnie wpasowuje się w każde pomieszczenie. Przy niskim poziomie ciśnienia akustycznego (18 dB(A)) jest wyjątkowo ciche. W trybie nocnym dźwięki robocze są stłumione, oświetlenie przyciemnione, a jednostka zewnętrzna pracuje o 3 dB(A) ciszej. Urządzenie jest standardowo wyposażone w filtr V-blocking.',
          features: ['SCOP do 4,8 / SEER do 8,7', 'Klasa efektywności energetycznej do A++ / A+++', 'Poziom hałasu (urządzenie wewnętrzne) od 19 dB(A)', 'Wbudowany filtr V-Blocking w standardzie', 'Wymiary (szer. / głęb. / wys.) 760 / 199 / 250 mm w przypadku MSZ-AY15 / 20VGK'],
        },
        {
          brand: 'Mitsubishi Electric',
          name: 'Diamond MSZ-LN',
          path: "https://storage.cloud.google.com/images-instal/klima-diamond.jpg",
          description: 'Urządzenie ścienne Diamond wyróżnia się nie tylko za sprawą eleganckiego wyglądu. Posiada też wiele nowatorskich funkcji.',
          features: ['Nowoczesny czujnik 3D i-see, który monitoruje obecność i położenie osób w pomieszczeniu i odpowiednio reguluje działanie klimatyzacji', 'Podwójne żaluzje powietrzne – pozwalają na precyzyjne kierowanie strumienia powietrza w różne strony',
            'Filtr Plasma-Quad-Plus – skutecznie usuwa z powietrza bakterie, wirusy, alergeny, kurz, pleśń oraz mikrocząsteczki', 'SCOP do 5,1 / SEER do 9,5', 'sterowanie Wi-Fi', 'cicha praca'
          ]
        },
        {
          brand: 'Mitsubishi Electric',
          name: 'Premium MSZ-EF',
          path: "https://storage.cloud.google.com/images-instal/klima-premium.png",
          description: 'Urządzenie ścienne Diamond wyróżnia się nie tylko za sprawą eleganckiego wyglądu. Posiada też wiele nowatorskich funkcji.',
          features: ['Wyjątkowo cicha praca 21 dB(A)', 'Filtr oczyszczający powietrze z powłoką z jonami srebra. Standardowy filtr z powłoką z jonami srebra stosowany jest w celu zahamowania rozwoju bakterii i pleśni oraz usuwania nieprzyjemnych zapachów.',
            'Wbudowany filtr V-Blocking na wyposażeniu standardowym. Ma działanie przeciwwirusowe i powstrzymuje przylegające wirusy i inne szkodliwe substancje, takie jak bakterie, pleśnie i alergeny.'
    ]  
        }
      ],
      match: (path: string) => path === '/oferta/klimatyzacja/produkty',
    }
  ]
},
      {
        label: 'Rekuperacja',
        href: '/oferta/rekuperacja/',
        match: (path: string) => path === '/oferta/rekuperacja/',
        children: [
          {
            label: 'Produkty',
            href: '/oferta/rekuperacja/produkty',
            match: (path: string) => path === '/oferta/rekuperacja/produkty',
          }
        ]
      },
      {
        label: 'Hydraulika',
        href: '/oferta/hydraulika/',
        match: (path: string) => path === '/oferta/hydraulika/',
        children: [
          {
            label: 'Produkty',
            href: '/oferta/hydraulika/produkty',
            match: (path: string) => path === '/oferta/hydraulika/produkty',
          },
        ]
      },
      {
        label: 'Posadzki anhydrytowe',
        href: '/oferta/posadzki-anhydrytowe/',
        match: (path: string) => path === '/oferta/posadzki-anhydrytowe/',
          children: [
            {
            label: 'Realizacje',
            href: '/oferta/posadzki-anhydrytowe/realizacje',
            match: (path: string) => path === '/oferta/posadzki-anhydrytowe/realizacje',
          },
        ]
      },
      {
        label: 'Woda lodowa',
        href: '/oferta/woda-lodowa/', 
        match: (path: string) => path === '/oferta/woda-lodowa/',
      },
    ],
  },
  {
    label: 'Dofinansowania',
    href: '/dofinansowania/',
    match: (path: string) => path.startsWith('/dofinansowania/'),
  },
  {
    label: 'Realizacje',
    href: '/realizacje/',
    match: (path: string) => path.startsWith('/realizacje/'),
  },
  {
    label: 'O nas',
    href: '/o-nas/',
    match: (path: string) => path.startsWith('/o-nas/'),
  },
];

export default navItems;