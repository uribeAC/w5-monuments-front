import getMonumentCard from "../MonumentCard/getMonumentCard";
import { Monument } from "../types";
import "./MonumentsList.css";

const getMonumentsList = (monuments: Monument[]): HTMLElement => {
  const monumentsElement = document.createElement("ul");
  monumentsElement.classList.add("monuments");

  monuments.forEach((monument) => {
    const monumentWrapper = document.createElement("li");
    monumentWrapper.classList.add("monument-wrapper");

    const MonumentCard = getMonumentCard(monument);
    monumentWrapper.appendChild(MonumentCard);

    monumentsElement.appendChild(monumentWrapper);
  });

  return monumentsElement;
};

export default getMonumentsList;
