import { WP_BaseHttp } from "../../../src/axios/wp";
import { WC_Api } from "../../../src/axios/wp-woocommerce";

export default async function handlesCreateCustomer(req, res) {
  const { firstName, lastName, secondName, email, password } = req.body;
  //console.log(req.body);

  if (firstName === "" || email === "" || password === "")
    return res.status(400).json();

  // const userBody = {
  //   username: email,
  //   first_name: capitalize(firstName),
  //   last_name: returnLastAndSecondName(lastName, secondName),
  //   AUTH_KEY: process.env.WP_CREATE_CUSTOMER_AUTH_KEY,
  //   password: password,
  //   email: email,
  // };

  // console.log({ userBody });

  // // Create wordpres user with role customer
  // let createUserRes;
  // try {
  //   createUserRes = await WP_BaseHttp.post(
  //     "wp-json/simple-jwt-login/v1/users",
  //     userBody
  //   );
  // } catch (error) {
  //   return res.status(400).json({ error: error.response.data?.data });
  // }

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

  console.log(customerRes.data, loginRes.data);
  customerRes.data.jwt = loginRes.data.data.jwt;

  res.status(200).json(customerRes.data);

  // res.status(200).json(createUserRes.data);
}

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
