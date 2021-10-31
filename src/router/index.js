import { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { routes } from "routes";
import { ListRoutes } from "./ListRoutes";


const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Switch>
          <ListRoutes routes={routes} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
