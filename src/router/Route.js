import { Route as RouterRoute } from "react-router-dom";

const Route = (props) => {
  const {
    route: { path, exact, component },
  } = props;
  let Element = component;

  return (
    <RouterRoute path={path} exact={exact}>
      <Element {...props} />
    </RouterRoute>
  );
};
export default Route;
