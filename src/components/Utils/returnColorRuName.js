export const returnColorRuName = colorName => {
  switch (colorName) {
    case "black":
      return "черный";
    case "white":
      return "белый";
    case "red":
      return "красный";
    case "dark-blue":
      return "темно-синий";
    default:
      return colorName;
  }
};
