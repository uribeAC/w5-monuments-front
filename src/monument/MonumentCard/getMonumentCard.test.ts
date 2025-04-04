import { sensojiTemple } from "../fixtures";
import getMonumentCard from "./getMonumentCard";

describe("Given the MonumentCard component", () => {
  describe("When it renders Senso-ji Temple", () => {
    test("Then it should show 'Senso-ji Temple' inside a heading inside the monument card", () => {
      const screen = document.createElement("div");
      const expectedMonumentName = "Templo Sensō-ji";

      const MonumentCard = getMonumentCard(sensojiTemple);

      screen.appendChild(MonumentCard);

      const monumentName = screen.querySelector("h2");

      expect(monumentName).not.toBeNull();
      expect(monumentName?.textContent).toBe(expectedMonumentName);
    });
  });
});
