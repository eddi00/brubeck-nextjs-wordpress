// import { db } from "../db/PrismaClient";

// export const getCustomerFromToken = async (req, res, next) => {
//   const { user } = req.headers.user.data;
//   let customer;
//   console.log(user);
//   try {
//     customer = await db.wp_wc_customer_lookup.findUnique({
//       where: {
//         user_id: parseInt(user.ID),
//       },
//     });
//   } catch (error) {
//     return res.status(400).json({ msg: "Customer doesn't exist" });
//   }

//   req.headers.customer = customer;
//   next();
// };
