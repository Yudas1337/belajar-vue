import {useRoute} from 'vue-router';

// Kelas CSS untuk menu default dan aktif
export const defaultNavbarClass =
  'block py-2 pr-4 pl-3 rounded md:p-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
export const activeNavbarClass =
  'block py-2 pr-4 pl-3 rounded md:p-0 bg-blue-700 md:bg-transparent text-white md:text-blue-700 dark:text-white';

export const navbarMenu = [
  {name: 'Home', path: '/'},
  {name: 'About', path: '/about'},
  {name: 'Services', path: '/services'},
  {name: 'Pricing', path: '/pricing'},
  {name: 'Contact', path: '/contact'},
];

export function useIsActive() {
  const route = useRoute();
  return (path: string) => route.path === path;
}
