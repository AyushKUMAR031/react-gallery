import { FaHome, FaUser, FaInfoCircle, FaCogs,FaBars } from "react-icons/fa";

export const sidebarItems = [
  {
    title: 'Home',
    key: 'home',
    icon: FaHome,
    children: [
      {
        title: 'Profile',
        key: 'profile',
        icon: FaUser,
      },
      {
        title: 'About',
        key: 'about',
        icon: FaInfoCircle,
      },
    ],
  },
  {
    title: 'Components',
    key: 'component',
    icon: FaCogs,
    children: [
      {
        title: 'ImageSlider',
        key: 'imageSlider',
        icon: FaBars,
      },
      {
        title: 'Accordion',
        key: 'accordion',
        icon: FaBars,
      },
    ],
  },
];
