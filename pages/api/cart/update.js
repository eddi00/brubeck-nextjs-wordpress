import { PrismaClient } from "@prisma/client";
import { WP_BaseHttp } from "../../../src/axios/wp";

export default async function handlesCartUpdate(req, res) {
  const { accessToken, cartItems } = req.body;

  if (!accessToken || !cartItems)
    return res.status(400).json({ msg: "Incomplete parameters" });

  let validateRes;
  try {
    validateRes = await WP_BaseHttp.get(
      "wp-json/simple-jwt-login/v1/auth/validate",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
  } catch (error) {
    return res.status(500).json({ msg: "Invalid token" });
  }

  let allUsers;
  try {
    const prisma = new PrismaClient();
    allUsers = await prisma.wp_users.update({
      where: { ID: parseInt(validateRes.data.data.user.ID) },
      data: { cart: JSON.stringify(cartItems) },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "DB error" });
  }

  res.status(200).json(allUsers.cart);
}
