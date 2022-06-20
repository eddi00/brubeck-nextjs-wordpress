import { WC_Api } from "../axios/wp-woocommerce";
import { db } from "../lib/db/PrismaClient";

export const getOrdersFromUser = async user => {
  // console.log(user);
  let customer, ordersRes;
  try {
    customer = await db.wp_wc_customer_lookup.findFirst({
      where: { username: user.email },
    });
    // console.log(customer);

    if (!customer) throw Error("Customer doesn't exist");

    ordersRes = await WC_Api.get("orders", {
      per_page: 100,
      customer_id: customer.customer_id,
    });

    // console.log(orders Res.data);

    return ordersRes.data;
  } catch (err) {
    console.log(err);
  }
};

const processProductsByCategoryId = object => {
  let temp = [];

  object.map(item => {
    let tempProduct = {
      id: item.id,
      name: item.name,
      sku: item.sku,
      price: item.price,
      regularPrice: item.regular_price,
      salePrice: item.sale_price,
      onSale: item.on_sale,
      description: item.description,
      categories: item.categories,
      tags: item.tags,
      images: item.images,
      attributes: item.attributes,
      stockStatus: item.stock_status,
    };
    temp.push(tempProduct);
  });

  return temp;
};
