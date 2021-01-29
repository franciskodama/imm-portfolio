

const links = document.querySelectorAll(".js-button");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 70;
  console.log(offsetTop);
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}