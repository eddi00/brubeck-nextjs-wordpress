import nc from "next-connect";
import { WP_BaseHttp } from "../../../src/axios/wp";
import { WC_Api } from "../../../src/axios/wp-woocommerce";

const handler = nc();
export default handler;

handler.post(async (req, res) => {
  const { firstName, lastName, secondName, email, password } = req.body;

  if (firstName === "" || email === "" || password === "")
    return res.status(400).json();

  const customerBody = {
    username: email,
    first_name: capitalize(firstName),
    last_name: returnLastAndSecondName(lastName, secondName),
    password: password,
    email: email,
    role: "customer",
  };

  let customerRes;
  try {
    customerRes = await WC_Api.post("customers", customerBody);
  } catch (error) {
    return res.status(400).json({ error: error.response.data });
  }

  let loginRes;
  try {
    loginRes = await WP_BaseHttp.post("wp-json/simple-jwt-login/v1/auth", {
      email,
      password,
    });
  } catch (error) {
    return res.status(401).json({ error: error.response.data });
  }

  customerRes.data.jwt = loginRes.data.data.jwt;
  res.status(200).json(customerRes.data);
});

const returnLastAndSecondName = (lastName, secondName) => {
  if (lastName && secondName)
    return capitalize(lastName) + " " + capitalize(secondName);
  if (lastName && !secondName) return capitalize(lastName);
  if (!lastName && secondName) return capitalize(secondName);

  return "";
};

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
