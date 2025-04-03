import { describe } from "vitest";
import { expect } from "vitest";
import { test } from "vitest";
import getHeader from "./getHeader";

const screen = document.createElement("div");
beforeEach(() => {
  screen.innerHTML = "";
});

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments' inside a heading", () => {
      const expectedAppTitle = "Monuments";

      const Header = getHeader();

      screen.appendChild(Header);

      const appTitle = screen.querySelector("h1");
      expect(appTitle).not.toBeNull();
      expect(appTitle?.textContent).toBe(expectedAppTitle);
    });

    test("Then it should show 'Monuments list' as a link", () => {
      const expectedText = "Monuments list";
      const expectedPath = "/";

      const Header = getHeader();

      screen.appendChild(Header);

      const linkElements = screen.querySelectorAll("a");
      const filteredLinkElements = Array.from(linkElements).filter(
        (linkElement) => linkElement.textContent === expectedText,
      );
      const linkElement = filteredLinkElements[0];

      expect(linkElement).not.toBeNull();
      expect(linkElement.textContent).toBe(expectedText);
      expect(linkElement.pathname).toBe(expectedPath);
    });

    test("Then it should show 'Add monument' as a link", () => {
      const expectedText = "Add monument";
      const expectedPath = "/add-monument";

      const Header = getHeader();

      screen.appendChild(Header);

      const linkElements = screen.querySelectorAll("a");
      const filteredLinkElements = Array.from(linkElements).filter(
        (linkElement) => linkElement.textContent === expectedText,
      );
      const linkElement = filteredLinkElements[0];

      expect(linkElement).not.toBeNull();
      expect(linkElement.textContent).toBe(expectedText);
      expect(linkElement.pathname).toBe(expectedPath);
    });
  });
});
