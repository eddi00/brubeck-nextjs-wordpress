import nc from "next-connect";
import { db } from "../../../src/lib/db/PrismaClient";
import { checkToken } from "../../../src/lib/API-Middleware/checkToken";

const handler = nc().use(checkToken);
export default handler;

handler.get(async (req, res) => {
  const { user } = req.headers.user.data;

  let cartRes;
  try {
    cartRes = await db.wp_users.findUnique({
      where: { ID: parseInt(user.ID) },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "DB error" });
  }

  res.status(200).json({ cart: cartRes.cart });
});

handler.put(async (req, res) => {
  const { user } = req.headers.user.data;
  const { cartItems } = req.body;

  if (!cartItems) return res.status(400).json({ msg: "Incomplete parameters" });

  let cartResponse;
  try {
    cartResponse = await db.wp_users.update({
      where: { ID: parseInt(user.ID) },
      data: { cart: JSON.stringify(cartItems) },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "DB error" });
  }

  res.status(200).json(cartResponse.cart);
});
