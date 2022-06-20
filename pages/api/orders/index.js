import { getCookie, getCookies } from "cookies-next";
import jwtDecode from "jwt-decode";
import { WP_BaseHttp } from "../../../src/axios/wp";

export default async function handler(req, res) {
  // const { authorization } = req.headers;
  // if (!authorization || !authorization.startsWith("Bearer "))
  //   return res.status(400).json({ msg: "No token in headers" });

  // const token = authorization.substring(7);
  const token = getCookie("accessToken", { req, res });
  console.log(getCookies({ req, res }));
  console.log(token);

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

  if (req.method === "POST") {
    // Process a POST request
  } else if (req.method === "GET") {
    // Handle any other HTTP method

    // const user = jwtDecode(accessToken);
    // console.log(user);

    // let cartRes;
    // try {
    //   const prisma = new PrismaClient();
    //   cartRes = await prisma.wp_users.findUnique({
    //     where: { ID: parseInt(validateRes.data.data.user.ID) },
    //   });
    // } catch (error) {
    //   console.log(error);
    //   return res.status(500).json({ msg: "DB error" });
    // }

    res.status(200).json({ msg: "hello" });
  }
}
