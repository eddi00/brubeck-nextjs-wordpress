export const returnCategoryRuName = word => {
  switch (word) {
    case "thermal":
      return "термобелье";
    case "fitness":
      return "фитнес и бег";
    case "accessories":
      return "аксессуары";
    case "new":
      return "новинки";
    case "sale":
      return "распродажа";
    default:
      return word;
  }
};
