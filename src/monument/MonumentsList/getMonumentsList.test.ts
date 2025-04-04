import { himejiCastle, sensojiTemple } from "../fixtures";
import getMonumentsList from "./getMonumentsList";

describe("Given the getMonumentsList component and monuments: Senso-ji Temple and Himeji Castle", () => {
  describe("When it renders", () => {
    test("Then it should show the names of Senso-ji Temple and Himeji Castle inside a heading", () => {
      const monuments = [sensojiTemple, himejiCastle];

      const screen = document.createElement("div");
      const MonumentsList = getMonumentsList(monuments);

      screen.appendChild(MonumentsList);

      const monumentNames = screen.querySelectorAll("h2");

      monumentNames.forEach((monumentName, position) => {
        expect(monumentName.textContent).toBe(monuments[position].name);
      });
    });
  });
});
