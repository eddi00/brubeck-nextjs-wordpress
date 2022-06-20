import { db } from "../lib/db/PrismaClient";

export const getCustomerData = async user => {
  let customer;
  try {
    customer = await db.wp_wc_customer_lookup.findFirst({
      where: { username: user.email },
      select: {
        customer_id: true,
        username: true,
        first_name: true,
        last_name: true,
      },
    });

    if (!customer) throw Error("Customer doesn't exist");
    return JSON.stringify(
      customer,
      (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    );

    return customer;
  } catch (err) {
    console.log(err);
  }
};
