import { WP_RestHttp } from "../axios/wp";

export const getMenuCategoriesData = async () => {
  try {
    const res = await WP_RestHttp.get("menu_categories");
    return processMenuCategories(res.data);
  } catch (err) {
    console.log(err);
  }
};

const processMenuCategories = (data) => {
  return data.reduce((acc, item) => {
    acc[item.menu_order] = item.acf;
    return acc;
  }, {});
};
