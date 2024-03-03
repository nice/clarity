/*
  Image fade in animation 
  Set img { opacity: 0} is set to get consistent results for loaded and cached images.

  Add a noscript to
  <noscript><style>img { opacity: 1 !important; }</style></noscript>

*/

const images = document.getElementsByTagName("img");

for (let image of images) {
  image.addEventListener("load", appear);
  image.style.opacity = "0";

  // for cached images
  if (image.complete) {
    appear.bind(image)();
  }
}

function appear() {
  this.style.transition = "opacity 2s";
  this.style.opacity = "1";
}
