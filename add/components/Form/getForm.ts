import "./Form.css";

export const getForm = (): HTMLElement => {
  const formWrapper = document.createElement("div");
  formWrapper.classList.add("monument-wrapper");

  const form = document.createElement("form");
  form.classList.add("monument-form");

  form.innerHTML = `
    <div class="monument-form__label">
      <label for="name" class="monument-form__text">Name: </label>
      <input type="text" class="monument-form__control" id="name" required>
    </div>
    <div class="monument-form__label">
      <label for="description" class="monument-form__text">Description: </label>
      <input type="text" class="monument-form__control" id="description" required>
    </div>
    <div class="monument-form__label">
      <label for="image-url" class="monument-form__text">Image URL: </label>
      <input type="url" class="monument-form__control" id="image-url" required>
    </div>
    <div class="monument-form__label">
      <label for="country" class="monument-form__text">Country: </label>
      <input type="text" class="monument-form__control" id="country" required>
    </div>
    <div class="monument-form__label">
      <label for="city" class="monument-form__text">City: </label>
      <input type="text" class="monument-form__control" id="city" required>
    </div>
    <button class="monument-form__button" type="submit">Register</button>
  `;

  formWrapper.appendChild(form);

  return formWrapper;
};
