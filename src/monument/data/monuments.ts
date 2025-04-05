import getMonuments from "../getMonuments";

const monumentsUrl = "http://localhost:4000/monuments";
export const monuments = await getMonuments(monumentsUrl);
