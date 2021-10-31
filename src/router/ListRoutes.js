import { Redirect } from "react-router-dom";
import Route from "./Route";

export const ListRoutes = ({ routes }) => {
  return routes.map((route, index) => {
    const { redirectTo } = route;
    if (!!redirectTo)
      return <Redirect key={index + redirectTo} to={redirectTo} />;
    return <Route key={route.path + index} route={route} />;
  });
};
