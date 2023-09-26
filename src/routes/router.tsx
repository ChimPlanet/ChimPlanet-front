import { createBrowserRouter, RouterProvider as Provider } from '@chimplanet/ui';

import { Bookmark } from './Bookmark';
import { Error } from './Error';
import { Event } from './Event';
import { Home } from './Home';
import { Job } from './Job';
import Layout from './Layout';
import { NotFound } from './NotFound';
import { Official } from './Official';
import { Paths } from './path';
import Popular from './Popular';
import { Search } from './Search';

const router = createBrowserRouter([
  {
    path: Paths.Home,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: Paths.Home,
        element: <Home />,
      },
      {
        path: Paths.Bookmark,
        element: <Bookmark />,
      },
      {
        path: Paths.Job,
        element: <Job />,
      },
      {
        path: Paths.Event,
        element: <Event />,
      },
      {
        path: Paths.Official,
        element: <Official />,
      },
      {
        path: Paths.Search,
        element: <Search />,
      },
      {
        path: Paths.Popular,
        element: <Popular />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: Paths.Error,
    element: <Error />,
  },
]);

export const RouterProvider = () => <Provider router={router} />;
