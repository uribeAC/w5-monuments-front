import { monuments } from "../../monument/data/monuments";
import getMonumentsList from "../../monument/MonumentsList/getMonumentsList";
import getHeader from "../Header/getHeader";
import "./App.css";

export const getApp = (): HTMLElement => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const Header = getHeader();

  const MonumentsList = getMonumentsList(monuments);

  mainContainer.appendChild(Header);
  mainContainer.appendChild(MonumentsList);

  return mainContainer;
};
