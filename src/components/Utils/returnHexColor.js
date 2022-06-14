// export const returnHexColor = colorName => {
//   switch (colorName) {
//     case "black":
//       return "#000";
//     case "white":
//       return "#fff";
//     case "dark-blue":
//       return "#00008b";
//     default:
//       return "#000";
//   }
// };

export const returnHexColor = (table, key) => {
  let color = "#000";

  table.map(item => {
    if (item.ru_name === key) color = item.color_hex;
  });

  return color;
};
