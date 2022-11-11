import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

/* Importamos los pages */
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SignIn/Signin";
import AdminUsers from "../pages/Admin/Users";
import AdminSubjects from "../pages/Admin/Subjects";


import Home from "../pages/home";
import NotFound from "../pages/notFound/notFound";
import Contact from "../pages/contact";

const routesAdmin = [
  {
    path: "/admin",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
  {
    path: "/admin/users",
    layout: LayoutAdmin,
    component: AdminUsers,
  },
  {
    path: "/admin/subjects",
    layout: LayoutAdmin,
    component: AdminSubjects,
  },
  {
    path: "/admin/login/*",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
];

/* Ruta home, notfound */
const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
  {
    path: "/contact",
    layout: LayoutBasic,
    component: Contact,
  },
];

const routeNotFound = [
  {
    path: "*",
    layout: LayoutBasic,
    component: NotFound,
  },
];

const routes = [...routesAdmin, ...routesClient, ...routeNotFound];
export default routes;