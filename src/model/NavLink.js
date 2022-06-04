import DropdownMenu from '../components/Dropdown';
import DropLink from '../components/DropLink';

export const NavLink = [
  {
    id: 1,
    link: 'MEN',
    drop: true,
    Dropdown: <DropLink />,
  },
  {
    id: 2,
    link: 'WOMEN',
  },
  {
    id: 3,
    link: 'KIDS',
    drop: true,
    Dropdown: <DropdownMenu />,
  },
  {
    id: 4,
    link: 'SALE',
  },
  {
    id: 5,
    link: '3 STRIPE LIFE',
  },
];
