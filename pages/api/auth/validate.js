import { WP_BaseHttp } from "../../../src/axios/wp";

export default async function handler(req, res) {
  const { accessToken } = req.body;

  const response = await WP_BaseHttp.post(
    "wp-json/simple-jwt-login/v1/auth/validate",
    {
      JWT: accessToken,
    }
  );

  res.status(response.status).json(response.data);
}
