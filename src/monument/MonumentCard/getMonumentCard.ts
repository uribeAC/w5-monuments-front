import { Monument } from "../types";
import "./MonumentCard.css";

const getMonumentCard = (monument: Monument): HTMLElement => {
  const monumentCardElement = document.createElement("article");
  monumentCardElement.classList.add("monument");

  monumentCardElement.innerHTML = `
  <div class="monument__info">
    <h2 class="monument__name">${monument.name}</h2>
    <img class="monument__image" src="${monument.imageUrl}" alt="Monument: ${monument.name}" width="250">
    <div class="monument__data">
      <p class="monument__description">${monument.description}</p>
      <span class="monument__location">${monument.country}, ${monument.city}</span>
    </div>
  </div>
  `;

  return monumentCardElement;
};

export default getMonumentCard;
