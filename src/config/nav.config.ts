export type NavItem = {
  label: string;
  href: string;
  match: (path: string) => boolean;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: 'Oferta',
    href: '/oferta/',
    match: (path: string) => path === '/oferta/',
    children: [
      {
        label: 'Pompy ciepła',
        href: '/oferta/pompy-ciepla/',
        match: (path: string) => path === '/oferta/pompy-ciepla/',
      },
      {
        label: 'Fotowoltaika',
        href: '/oferta/fotowoltaika/',
        match: (path: string) => path === '/oferta/fotowoltaika/',
      },
      {
        label: 'Klimatyzacja',
        href: '/oferta/klimatyzacja/',
        match: (path: string) => path === '/oferta/klimatyzacja/',
      },
      {
        label: 'Rekuperacja',
        href: '/oferta/rekuperacja/',
        match: (path: string) => path === '/oferta/rekuperacja/',
      },
      {
        label: 'Hydraulika',
        href: '/oferta/hydraulika/',
        match: (path: string) => path === '/oferta/hydraulika/',
      },
      {
        label: 'Posadzki anhydrytowe',
        href: '/oferta/posadzki-anhydrytowe/',
        match: (path: string) => path === '/oferta/posadzki-anhydrytowe/',
      },
      {
        label: 'Woda lodowa',
        href: '/oferta/woda-20lodowa/', 
        match: (path: string) => path === '/oferta/woda-20lodowa/',
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