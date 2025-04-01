import { getApp } from "./components/App/getApp";
import "./styles.css";
import "@fontsource-variable/lexend/index.css";

const rootElement = document.querySelector(".root");

if (!rootElement) {
  throw new Error("Missing root element");
}

const App = getApp();

rootElement.appendChild(App);
