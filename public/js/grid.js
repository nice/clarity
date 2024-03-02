var grid = document.querySelector(".grid");

if (grid) {
  var colc = new Colcade(grid, {
    columns: ".grid-col",
    items: ".grid-item",
  });
}
