import { describe } from "node:test";
import { getForm } from "./getForm";

const screen = document.createElement("div");
beforeEach(() => {
  screen.innerHTML = "";
});

describe("Given the Form component", () => {
  describe("When it renders", () => {
    test("Then it should show a label 'Name' and a input for it", () => {
      const expectedLabel = "Name: ";

      const Form = getForm();

      screen.appendChild(Form);
      const nameInput = screen.querySelector("#name");

      expect(nameInput).not.toBeNull();
      expect(screen.textContent).toContain(expectedLabel);
    });

    test("Then it should show a label 'Description' and a input for it", () => {
      const expectedLabel = "Description: ";

      const Form = getForm();

      screen.appendChild(Form);
      const descriptionInput = screen.querySelector("#description");

      expect(descriptionInput).not.toBeNull();
      expect(screen.textContent).toContain(expectedLabel);
    });

    test("Then it should show a label 'Country' and a input for it'", () => {
      const expectedLabel = "Country: ";

      const Form = getForm();

      screen.appendChild(Form);
      const countryInput = screen.querySelector("#country");

      expect(countryInput).not.toBeNull();
      expect(screen.textContent).toContain(expectedLabel);
    });

    test("Then it should show a label 'City' and a input for it'", () => {
      const expectedLabel = "City: ";

      const Form = getForm();

      screen.appendChild(Form);
      const cityInput = screen.querySelector("#city");

      expect(cityInput).not.toBeNull();
      expect(screen.textContent).toContain(expectedLabel);
    });
  });
});
