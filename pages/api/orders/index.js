import nc from "next-connect";
import { WC_Api } from "../../../src/axios/wp-woocommerce";
import { checkToken } from "../../../src/lib/API-Middleware/checkToken";

const handler = nc().use(checkToken);

handler.post(async (req, res) => {
  const { user } = req.headers.user.data;
  const { cart, customer } = req.body;
  const line_items = [];

  cart.forEach(item => {
    let temp = { product_id: item.id, quantity: item.quantity };

    if (item.variationId !== null) temp.variation_id = item.variationId;

    line_items.push(temp);
  });

  if (line_items.length === 0 || !customer)
    return res.status(400).json({ msg: "No cart items or customer data" });

  const data = {
    customer_id: user.ID,
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    set_paid: false,
    billing: {
      first_name: customer.firstName,
      last_name: customer.lastName,
      country: "RU",
      email: customer.email,
      phone: customer.phone,
      city: customer.city,
      address_1: customer.address1,
    },
    line_items,
    // shipping_lines: [
    //   {
    //     method_id: "flat_rate",
    //     method_title: "Flat Rate",
    //     total: "10.00",
    //   },
    // ],
  };

  try {
    const response = WC_Api.post("orders", data);
    res.status(200).json({ response: response.data });
  } catch (error) {
    console.log(error.data);
    res.status(400).json({ response: error.data });
  }
});

export default handler;
