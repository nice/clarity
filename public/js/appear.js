const images = document.getElementsByTagName("img");

for (let image of images) {
  image.addEventListener("load", appear);
  image.style.opacity = "0";
}

function appear() {
  this.style.transition = "opacity 2s";
  this.style.opacity = "1";
}
