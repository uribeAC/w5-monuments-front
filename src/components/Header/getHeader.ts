import "./Header.css";

const getHeader = (): HTMLElement => {
  const header = document.createElement("header");
  header.classList.add("main-header");

  header.innerHTML = `
  <h1 class="title">Monuments</h1>
  <nav>
    <ul class="navigation">
      <li><a class="navigation__link" href="/">Monuments</a></li>
      <li><a class="navigation__link" href="/add/">Add monument</a></li>
    </ul>
  </nav>
  `;

  const navegationElements = header.querySelectorAll("a");

  navegationElements.forEach((navegationElement) => {
    if (window.location.href === navegationElement.href) {
      navegationElement.classList.add("navigation__link--current");
    }
  });

  return header;
};

export default getHeader;
