import nc from "next-connect";
import { WC_Api } from "../../../src/axios/wp-woocommerce";
import { checkToken } from "../../../src/lib/API-Middleware/checkToken";

const handler = nc().use(checkToken);

handler.get(async (req, res) => {
  const { user } = req.headers.user.data;

  let customerDataRes;
  try {
    customerDataRes = await WC_Api.get(`customers/${parseInt(user.ID)}`);
  } catch (error) {
    // return res.status(500).json({ msg: "WC error", data: error.response.data });
    return res.status(400).json({ msg: "WC error" });
  }

  res.status(200).json(customerDataRes.data);
});

export default handler;
