import { render } from "react-dom";
import App from "./components/App/App";
import * as serviceWorker from "./components/App/serviceWorker";
import "./index.css";
render(<App />, document.getElementById("root"));
serviceWorker.unregister();
