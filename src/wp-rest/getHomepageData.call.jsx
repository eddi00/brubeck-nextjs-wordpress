import { WP_RestHttp } from "../axios/wp";

export const getHomepageData = async () => {
  try {
    const res = await WP_RestHttp.get("pages/30?_fields=id,title,acf");
    return res.data.acf;
  } catch (err) {
    console.log(err);
  }
};

export const processHomepageData = async acf => {
  try {
    let res = await WP_RestHttp.get("media/" + acf.hero_first_image);
    acf.hero_first_image = res.data.source_url;

    res = await WP_RestHttp.get("media/" + acf.hero_second_image_copy);
    acf.hero_second_image_copy = res.data.source_url;

    res = await WP_RestHttp.get("media/" + acf.about_image);
    acf.about_image = res.data.source_url;

    res = await WP_RestHttp.get("media/" + acf.category_one_image);
    acf.category_one_image = res.data.source_url;

    res = await WP_RestHttp.get("media/" + acf.category_two_image);
    acf.category_two_image = res.data.source_url;

    res = await WP_RestHttp.get("media/" + acf.category_three_image);
    acf.category_three_image = res.data.source_url;
  } catch (err) {
    console.log(err);
  }

  return acf;
};
