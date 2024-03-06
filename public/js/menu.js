function initMenu() {
  var burger = document.querySelector("#burger");
  var menu = document.querySelector("#menu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      console.log("fff");
      menu.classList.toggle("hidden");
    });
  }
}

document.addEventListener("DOMContentLoaded", initMenu);
