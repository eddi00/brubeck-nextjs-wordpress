import { getProduct } from "../../../src/wp-rest/getProduct";

export default async function handler(req, res) {
  try {
    const data = await getProduct(req.body.param);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
}
