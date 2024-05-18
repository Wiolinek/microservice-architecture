import { RouteObject } from 'react-router-dom';
import Register from '@pages/Register';
import NotFound from '@pages/NotFound';
import Ride from '@pages/Ride';
import Home from '@pages/Home.tsx';
import AddRide from '@pages/AddRide.tsx';
import Inbox from '@pages/Inbox.tsx';
import LogIn from '@pages/LogIn.tsx';
import ErrorPage from '@pages/ErrorPage.tsx';

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
    path: '*',
    element: <NotFound />,
    errorElement: <ErrorPage />,
  },
];