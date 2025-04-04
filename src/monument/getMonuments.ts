import { Monument } from "./types";

const getMonuments = async (): Promise<Monument[]> => {
  const monumentsUrl = "https://monuments-back-uribe.onrender.com/monuments";

  const response = await fetch(monumentsUrl);

  const { monuments } = (await response.json()) as { monuments: Monument[] };

  return monuments;
};

export default getMonuments;
