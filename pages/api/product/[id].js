import nc from "next-connect";
import { getProduct } from "../../../src/wp-rest/getProduct";

const handler = nc();

handler.get(async (req, res) => {
  const {
    query: { id },
  } = req;

  try {
    const data = await getProduct(id);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
});

export default handler;
