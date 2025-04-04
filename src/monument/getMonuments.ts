import { Monument } from "./types";

const getMonuments = async (): Promise<Monument[]> => {
  const monumentsUrl = "http://localhost:4000/monuments";

  const response = await fetch(monumentsUrl);

  const { monuments } = (await response.json()) as { monuments: Monument[] };

  return monuments;
};

export default getMonuments;
