import getHeader from "../../../src/components/Header/getHeader.ts";
import "../../../src/components/App/App.css";
import { getForm } from "../Form/getForm.ts";

export const getApp = (): HTMLElement => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const Header = getHeader();

  const Form = getForm();

  mainContainer.appendChild(Header);
  mainContainer.appendChild(Form);

  return mainContainer;
};
