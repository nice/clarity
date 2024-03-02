function getImageHeight(size) {
  let height;
  switch (size) {
    case "small":
      height = 64;
      break;
    case "medium":
      height = 96;
      break;
    case "large":
      height = 128;
      break;
    default:
      height = 64;
  }

  return height;
}

export { getImageHeight };
