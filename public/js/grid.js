function initGrid() {
  var grid = document.querySelector(".grid");

  if (grid) {
    new Colcade(grid, {
      columns: ".grid-col",
      items: ".grid-item",
    });
  }
}

initGrid();
