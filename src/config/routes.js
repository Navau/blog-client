//Layouts
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutClient from "../layouts/LayoutClient";

//Admin Pages
import AdminPage from "../pages/Admin";
import SignInAdmin from "../pages/Admin/SignIn";
import AdminBlog from "../pages/Admin/Blog";
import AdminUsers from "../pages/Admin/Users";

//Client Pages
import HomePage from "../pages/Client/Home";
import Blog from "../pages/Client/Blog";

//ERROR 404
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/admin/*",
    element: LayoutAdmin,
    routes: [
      {
        path: "/",
        element: AdminPage,
      },
      {
        path: "/login",
        element: SignInAdmin,
      },
      {
        path: "/users",
        element: AdminUsers,
      },
      {
        path: "/blog",
        element: AdminBlog,
      },
      {
        path: "*",
        element: Error404,
      },
    ],
  },
  {
    path: "/*",
    element: LayoutClient,
    routes: [
      {
        path: "/",
        element: HomePage,
      },
      {
        path: "/blog",
        element: Blog,
      },
      {
        path: "/blog/:url",
        element: Blog,
      },
      {
        path: "*",
        element: Error404,
      },
    ],
  },
];

export default routes;
