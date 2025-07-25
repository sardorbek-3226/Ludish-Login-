import { useSelector } from "react-redux";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";

import MainLayout from './layout/MainLayout'
import {Home,Login,Profile,Signup,SingleImage} from "./pages"
import Return from "./pages/return";
import About from "./components/About";

function App() {
  const { user } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        { index: true,
          path: "/",
          element: <Home /> },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path:"/return",
          element: <Return/>
        },
        {
          path:"/about",
          element:<About/> 
        },
        {
          path: "/singleImage/:id",
          element: <SingleImage />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/singup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
