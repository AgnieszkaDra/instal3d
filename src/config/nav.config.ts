export type NavItem = {
  label: string;
  href: string;
  match: (path: string) => boolean;
  children?: NavItem[];
   products?: string[];
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
            products: ['ola', 'jola'],
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
            products: ['ola', 'jola'],
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
            products: ['ola', 'klima'],
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
            products: ['rekuperacja', 'rekuperacja2'],
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
            products: ['rekuperacja', 'rekuperacja2'],
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