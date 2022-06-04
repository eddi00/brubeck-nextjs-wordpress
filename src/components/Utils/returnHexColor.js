export const returnHexColor = colorName => {
  switch (colorName) {
    case "black":
      return "#000";
    case "white":
      return "#fff";
    case "dark-blue":
      return "#00008b";
    default:
      return "#000";
  }
};
