import { WC_Api } from "../../../src/axios/wp-woocommerce";

export default async function handlesGuestOrder(req, res) {
  const { cart, customer } = req.body;
  //console.log(customer);

  const line_items = [];

  cart.forEach(item => {
    let temp = { product_id: item.id, quantity: item.quantity };

    if (item.variationId !== null) temp.variation_id = item.variationId;

    line_items.push(temp);
  });

  //console.log(line_items);

  const data = {
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    set_paid: false,
    billing: {
      first_name: customer.firstName,
      last_name: customer.lastName,
      country: "RU",
      email: customer.email,
      phone: customer.phone,
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

  WC_Api.post("orders", data)
    .then(response => {
      //console.log(response.data);
      res.status(200).json({ response: response.data });
    })
    .catch(error => {
      console.log(error.data);
      res.status(400).json({ response: error.data });
    });

  // res.status(200).json({ body: req.body });
}
