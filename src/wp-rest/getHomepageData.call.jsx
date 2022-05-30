import { WP_RestHttp } from "../axios/wp";

export const getHomepageData = async () => {
  try {
    const res = await WP_RestHttp.get("pages/30?_fields=id,title,acf");
    return await processHomepageData(res.data.acf);
  } catch (err) {
    console.log(err);
  }
};

const processHomepageData = async acf => {
  try {
    let res = await WP_RestHttp.get("media/" + acf.hero_first_image);
    acf.hero_first_image = res.data.source_url;

    res = await WP_RestHttp.get("media/" + acf.hero_second_image_copy);
    acf.hero_second_image_copy = res.data.source_url;

    res = await WP_RestHttp.get("media/" + acf.about_image);
    acf.about_image = res.data.source_url;
  } catch (err) {
    console.log(err);
  }

  return acf;
};
