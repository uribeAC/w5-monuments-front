import { Monument } from "../types";
import getMonumentCard from "./getMonumentCard";

describe("Given the MonumentCard component", () => {
  describe("When it renders Senso-ji Temple", () => {
    const sensojiTemple: Monument = {
      id: "123456789",
      name: "Templo Sensō-ji",
      description:
        "Este es el templo budista más antiguo de Tokio, construido en honor a la diosa Kannon.",
      imageUrl:
        "https://live.staticflickr.com/65535/52532522963_11f33537ae_b.jpg",
      country: "Japon",
      city: "Tokio",
    };

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
