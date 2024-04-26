
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Inventory",
    icon: "design_image",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "3D Map",
    icon: "location_map-big",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Monitor",
    icon: "ui-1_bell-53",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: <UserPage />,
    layout: "/admin",
  },
  {
    path: "/extended-tables",
    name: "Orders",
    icon: "files_paper",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Assistant",
    icon: "design-2_ruler-pencil",
    component: <Typography />,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Check Global Warehouses",
    icon: "business_globe",
    component: <Upgrade />,
    layout: "/admin",
  },
];
export default dashRoutes;
