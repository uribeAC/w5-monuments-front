import "./Header.css";

const getHeader = (): HTMLElement => {
  const header = document.createElement("header");
  header.classList.add("main-header");

  header.innerHTML = "<h1 class='title'>Monuments</h1>";

  return header;
};

export default getHeader;
