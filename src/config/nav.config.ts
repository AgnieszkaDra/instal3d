const navItems = [
  {
    label: 'Oferta',
    href: '/oferta/',
    match: (path: string) => path === '/oferta/',
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