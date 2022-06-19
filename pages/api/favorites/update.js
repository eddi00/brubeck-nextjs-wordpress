import { WP_BaseHttp } from "../../../src/axios/wp";
import { db } from "../../../src/lib/db/PrismaClient";

export default async function handlesCartUpdate(req, res) {
  const { accessToken, favoriteItems } = req.body;

  console.log(favoriteItems);

  if (!accessToken || !favoriteItems)
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
    allUsers = await db.wp_users.update({
      where: { ID: parseInt(validateRes.data.data.user.ID) },
      data: { favorites: JSON.stringify(favoriteItems) },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "DB error" });
  }

  res.status(200).json(allUsers.favorites);
}
