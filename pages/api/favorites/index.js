import nc from "next-connect";
import { db } from "../../../src/lib/db/PrismaClient";
import { checkToken } from "../../../src/lib/API-Middleware/checkToken";

const handler = nc().use(checkToken);
export default handler;

handler.get(async (req, res) => {
  const { user } = req.headers.user.data;

  let favoriteRes;
  try {
    favoriteRes = await db.wp_users.findUnique({
      where: { ID: parseInt(user.ID) },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "DB error" });
  }

  res.status(200).json({ favorites: favoriteRes.favorites });
});

handler.put(async (req, res) => {
  const { user } = req.headers.user.data;
  const { favoriteItems } = req.body;

  if (!favoriteItems)
    return res.status(400).json({ msg: "Incomplete parameters" });

  let allUsers;
  try {
    allUsers = await db.wp_users.update({
      where: { ID: parseInt(user.ID) },
      data: { favorites: JSON.stringify(favoriteItems) },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "DB error" });
  }

  res.status(200).json(allUsers.favorites);
});
