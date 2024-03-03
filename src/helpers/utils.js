import { ACCENT_TEXT_COLOR, ACCENT_BACKGROUND_COLOR } from "../consts";

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

function getAccentStyle() {
  let style = "";

  if (ACCENT_TEXT_COLOR.length) {
    style += `color: ${ACCENT_TEXT_COLOR};`;
  }

  if (ACCENT_BACKGROUND_COLOR.length) {
    style += `background-color: ${ACCENT_BACKGROUND_COLOR};`;
  }

  return style;
}

export { getImageHeight, formatDate, getAccentStyle };
