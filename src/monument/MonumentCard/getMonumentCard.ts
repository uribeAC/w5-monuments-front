import { Monument } from "../types";

const getMonumentCard = (monument: Monument): HTMLElement => {
  const monumentCardElement = document.createElement("article");
  monumentCardElement.classList.add("monument");

  monumentCardElement.innerHTML = `<h2 class="monument__name">${monument.name}</h2>`;

  return monumentCardElement;
};

export default getMonumentCard;
