import { getCookie, removeCookies, setCookies } from "cookies-next";
import { WP_BaseHttp } from "../../axios/wp";

export const verifySessionCookieSSR = async (req, res, next) => {
  const token = getCookie("accessToken", { req, res });

  if (!token) {
    req.error = "noToken";
    next();
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  let invalidToken = false;

  try {
    await WP_BaseHttp.get("wp-json/simple-jwt-login/v1/auth/validate", config);
  } catch (err) {
    invalidToken = true;
  }

  if (invalidToken) {
    try {
      const response = await WP_BaseHttp.post(
        "wp-json/simple-jwt-login/v1/auth/refresh",
        {
          JWT: token,
        }
      );
      removeCookies("accessToken", { req, res });
      setCookies("accessToken", response.data.data.jwt, {
        req,
        res,
        maxAge: 60 * 60 * 24 * 14,
        sameSite: true,
      });
    } catch (err) {
      req.error = "invalidToken";
    }
  }

  next();
};

// const token = getCookie("accessToken", context);
//   const { req, res } = context;

//   if (!token) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   const config = {
//     headers: { Authorization: `Bearer ${token}` },
//   };

//   let invalidToken = false;
//   let response;

//   try {
//     response = await WP_BaseHttp.get(
//       "wp-json/simple-jwt-login/v1/auth/validate",
//       config
//     );
//   } catch {
//     invalidToken = true;
//   }

//   if (invalidToken) {
//     try {
//       response = await WP_BaseHttp.post(
//         "wp-json/simple-jwt-login/v1/auth/refresh",
//         {
//           JWT: token,
//         }
//       );
//       removeCookies("accessToken", { req, res });
//       setCookies("accessToken", response.data.data.jwt, {
//         req,
//         res,
//         maxAge: 60 * 60 * 24 * 14,
//         sameSite: true,
//       });
//     } catch (err) {
//       return {
//         redirect: {
//           destination: "/signOut",
//           permanent: false,
//         },
//       };
//     }
//   }
