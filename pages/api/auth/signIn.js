import { WP_BaseHttp } from "../../../src/axios/wp";

export default async function handler(req, res) {
  const { email, password } = req.body;

  const response = await WP_BaseHttp.post("wp-json/simple-jwt-login/v1/auth", {
    email,
    password,
  });

  // if (response.status === 200) res.status(200).json(response.data);
  // else res.status(400).json(response.data);

  res.status(response.status).json(response.data);
}
