import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


function Layout() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [ 
      { path: "/", element: <HomePage /> }
    ]
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}
export default Router;
