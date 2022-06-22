import { getCookie } from "cookies-next";
import { WP_BaseHttp } from "../../axios/wp";

export const checkToken = async (req, res, next) => {
  const token = getCookie("accessToken", { req, res });

  let validateRes;
  try {
    validateRes = await WP_BaseHttp.get(
      "wp-json/simple-jwt-login/v1/auth/validate",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    return res.status(401).json({ msg: "Invalid token" });
  }

  req.headers.user = validateRes.data;
  next();
};
