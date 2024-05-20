import { ReactElement } from 'react';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InfoIcon from '@mui/icons-material/Info';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Favorite from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';

export interface UserMenuItems {
  title: string;
  icon: ReactElement;
  link: string;
}

export const userMenuItemsList: UserMenuItems[] = [
  {
    title: 'My account',
    icon: <InfoIcon sx={{ mr: 2 }} />,
    link: '/dashboard/my-account',
  },
  {
    title: 'Booked rides',
    icon: <DirectionsCarIcon sx={{ mr: 2 }} />,
    link: '/dashboard/booked-rides',
  },
  {
    title: 'Offered rides',
    icon: <LocalOfferIcon sx={{ mr: 2 }} />,
    link: '/dashboard/offered-rides',
  },
  {
    title: 'Favourites',
    icon: <Favorite sx={{ mr: 2 }} />,
    link: '/dashboard/favourites',
  },
  {
    title: 'Inbox',
    icon: <EmailIcon sx={{ mr: 2 }} />,
    link: '/dashboard/inbox',
  },
];
