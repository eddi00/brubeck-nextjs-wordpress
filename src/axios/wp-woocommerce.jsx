import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const WC_Api = new WooCommerceRestApi({
  url: process.env.WP_HTTP_BASE_ADDRESS,
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET,
  version: "wc/v3",
});
