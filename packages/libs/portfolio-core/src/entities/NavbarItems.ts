export enum Sections {
  HOME = 'Home',
  ABOUT = 'About',
  EDUCATION = 'Education',
  WORK = 'Work',
  SKILLS = 'Skills',
  PROJECTS = 'Projects',
  CONTACT = 'Contact',
}

export type NavBarItem = {
  _id: number;
  navbarItem: Sections;
  url: string;
};

export const NAVBAR_ITEMS: NavBarItem[] = [
  {
    _id: 1,
    navbarItem: Sections.HOME,
    url: '/',
  },
  {
    _id: 3,
    navbarItem: Sections.EDUCATION,
    url: '/education',
  },
  {
    _id: 4,
    navbarItem: Sections.WORK,
    url: '/work',
  },
  {
    _id: 5,
    navbarItem: Sections.SKILLS,
    url: '/skills',
  },
  {
    _id: 6,
    navbarItem: Sections.PROJECTS,
    url: '/projects',
  },
  {
    _id: 7,
    navbarItem: Sections.CONTACT,
    url: '/contact',
  },
];