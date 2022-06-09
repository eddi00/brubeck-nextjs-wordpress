import Head from "next/head";
import { Header } from "../src/components/Header/Header.components";
import { getHomepageData } from "../src/wp-rest/getHomepageData.call";
import { getMenuCategoriesData } from "../src/wp-rest/getMenuCategoriesData.call";
import Footer from "../src/components/Footer/Footer.component";
import { getAllProducts } from "../src/wp-rest/getAllProducts.call";
import Cart from "../src/components/Cart.page/Cart.component";

export default function CartPage({ data, categoriesLinkList, products }) {
  return (
    <div>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header data={data} categories={categoriesLinkList} />

      <Cart />

      <Footer data={data} />
    </div>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const data = await getHomepageData();
  const categoriesLinkList = await getMenuCategoriesData();
  const products = await getAllProducts();

  return {
    props: {
      data,
      categoriesLinkList,
      products,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
