import { WP_BaseHttp } from "../../../src/axios/wp";
import { db } from "../../../src/lib/db/PrismaClient";

export default async function handlesCartUpdate(req, res) {
  const { accessToken } = req.body;

  if (!accessToken) return res.status(400).json({ msg: "No token" });

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

  let favoriteRes;
  try {
    favoriteRes = await db.wp_users.findUnique({
      where: { ID: parseInt(validateRes.data.data.user.ID) },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "DB error" });
  }

  res.status(200).json({ favorites: favoriteRes.favorites });
}
