import { MonumentCommonData } from "../../src/monument/types";

export const sendData = async (): Promise<void> => {
  const nameInput = document.querySelector("#name") as HTMLInputElement;
  const descriptionInput = document.querySelector(
    "#description",
  ) as HTMLInputElement;
  const imageUrlInput = document.querySelector(
    "#image-url",
  ) as HTMLInputElement;
  const countryInput = document.querySelector("#country") as HTMLInputElement;
  const cityInput = document.querySelector("#city") as HTMLInputElement;

  if (
    !nameInput ||
    !descriptionInput ||
    !imageUrlInput ||
    !countryInput ||
    !cityInput
  ) {
    throw new Error("Missing input elements");
  }
  const monumentData: MonumentCommonData = {
    name: nameInput.value,
    description: descriptionInput.value,
    imageUrl: imageUrlInput.value,
    country: countryInput.value,
    city: cityInput.value,
  };

  try {
    await fetch("https://monuments-back-uribe.onrender.com/monuments/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(monumentData),
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};
