import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/DashboardLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import DashboardApp from './pages/DashboardApp';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router({ changeDark }) {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout changeDarkMode={changeDark} />,
      children: [
        { path: 'home', element: <DashboardApp /> },
        { path: 'events', element: <Events /> },
        { path: 'gallery', element: <Gallery /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },

      ]
    },
    { path: '404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
