import { WP_BaseHttp } from "../../../src/axios/wp";

export default async function handler(req, res) {
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
    console.log(error);
    return res.status(500).json({ msg: "Invalid token" });
  }

  res.status(200).json(validateRes.data);
}
