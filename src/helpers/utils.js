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

function formatDate(date) {
  try {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
  } catch (e) {
    return date;
  }
}

export { getImageHeight, formatDate };
