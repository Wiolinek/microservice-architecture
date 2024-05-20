import { RouteObject } from 'react-router-dom';
import Ride from '@pages/Ride';
import Home from '@pages/Home';
import AddRide from '@pages/AddRide';
import LogIn from '@pages/LogIn';
import Register from '@pages/Register';
import Dashboard from '@pages/Dashboard';
import BookedRides from '@pages/BookedRides';
import OfferedRides from '@pages/OfferedRides';
import MyAccount from '@pages/MyAccount';
import Favourites from '@pages/Favourites';
import Inbox from '@pages/Inbox';
import NotFound from '@pages/NotFound';
import ErrorPage from '@pages/ErrorPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'ride/:rideId',
        element: <Ride />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: '/add-ride',
    element: <AddRide />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/inbox',
    element: <Inbox />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LogIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard/my-account',
        element: <MyAccount />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/dashboard/booked-rides',
        element: <BookedRides />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/dashboard/offered-rides',
        element: <OfferedRides />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/dashboard/favourites',
        element: <Favourites />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/dashboard/inbox',
        element: <Inbox />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
    errorElement: <ErrorPage />,
  },
];
