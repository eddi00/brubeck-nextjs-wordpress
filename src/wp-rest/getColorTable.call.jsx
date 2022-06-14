import { WP_RestHttp } from "../axios/wp";

export const getColorTable = async () => {
  try {
    const res = await WP_RestHttp.get("color_table");
    return processColorTable(res.data);
  } catch (err) {
    console.log(err);
  }
};

const processColorTable = data => {
  return data.map(item => item.acf);
};
