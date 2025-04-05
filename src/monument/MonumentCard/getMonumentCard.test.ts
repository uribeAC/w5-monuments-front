import { sensojiTemple } from "../fixtures";
import getMonumentCard from "./getMonumentCard";

const screen = document.createElement("div");
beforeEach(() => {
  screen.innerHTML = "";
});

describe("Given the MonumentCard component", () => {
  describe("When it renders Senso-ji Temple", () => {
    test("Then it should show 'Senso-ji Temple' inside a heading inside the monument card", () => {
      const expectedMonumentName = "Templo Sensō-ji";

      const MonumentCard = getMonumentCard(sensojiTemple);

      screen.appendChild(MonumentCard);

      const monumentName = screen.querySelector("h2");

      expect(monumentName).not.toBeNull();
      expect(monumentName?.textContent).toBe(expectedMonumentName);
    });

    test("Then it should show an image of the monument Senso-ji Temple inside the monument card", () => {
      const expectedImageDescription = `Monument: ${sensojiTemple.name}`;

      const MonumentCard = getMonumentCard(sensojiTemple);

      screen.appendChild(MonumentCard);

      const monumentImageElement = screen.querySelector("img");

      expect(monumentImageElement).not.toBeNull();
      expect(monumentImageElement?.alt).toBe(expectedImageDescription);
    });

    test("Then it should show the description: 'Es el templo budista más antiguo de Tokio, construido en honor a la diosa Kannon.' inside the monument card", () => {
      const expectedDescription = sensojiTemple.description;

      const MonumentCard = getMonumentCard(sensojiTemple);

      screen.appendChild(MonumentCard);

      const monumentDescriptionElement = [...screen.querySelectorAll(`*`)].find(
        (element) => element.textContent === sensojiTemple.description,
      );

      expect(monumentDescriptionElement).not.toBeNull();
      expect(monumentDescriptionElement?.textContent).toBe(expectedDescription);
    });

    test("Then it should show the location: 'Japon, Tokio' inside the monument card", () => {
      const expectedMonumentLocation = `${sensojiTemple.country}, ${sensojiTemple.city}`;

      const MonumentCard = getMonumentCard(sensojiTemple);

      screen.appendChild(MonumentCard);

      const monumentLocationElement = [...screen.querySelectorAll(`*`)].find(
        (element) =>
          element.textContent ===
          `${sensojiTemple.country}, ${sensojiTemple.city}`,
      );

      expect(monumentLocationElement).not.toBeNull();
      expect(monumentLocationElement?.textContent).toBe(
        expectedMonumentLocation,
      );
    });
  });
});
