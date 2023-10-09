
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth/>,
    },
    {
      path: "/home",
      element: <Dashboard/>,
    },
    {
      path: "/logout",
      element: <Auth/>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
