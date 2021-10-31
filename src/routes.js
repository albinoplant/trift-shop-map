import { lazy } from "react";


export const paths = {
  location: "/location",
};


export const routes = [
  {
    path: "/",
    redirectTo: paths.location,
  },
  {
    path: paths.location + "/:location",
    component: lazy(() => import("views/CockpitView")),
    exact: true,
  },
  {
    path: paths.location,
    component: lazy(() => import("views/LocationView")),
    exact: true,
  },
];
