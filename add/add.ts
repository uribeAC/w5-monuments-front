import { getApp } from "./components/App/getApp";
import "../src/styles.css";
import "@fontsource-variable/lexend/index.css";
import { sendData } from "./client/sendData";

const rootElement = document.querySelector(".root");

if (!rootElement) {
  throw new Error("Missing root element");
}

const App = getApp();

rootElement.appendChild(App);

const form = document.querySelector("form") as HTMLFormElement;

if (!form) {
  throw new Error("Missing form element");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
