import Head from "next/head";
import { Header } from "../src/components/Header/Header.components";
import Hero from "../src/components/Homepage/Hero/Hero.component";
import Sales from "../src/components/Homepage/Sales/Sales.component";
import Section from "../src/components/Homepage/Section/Section.component";
import {
  getHomepageData,
  processHomepageData,
} from "../src/wp-rest/getHomepageData.call";
import { getMenuCategoriesData } from "../src/wp-rest/getMenuCategoriesData.call";
import { getProductsByCategoryId } from "../src/wp-rest/getProductsByCategoryId.call";
import styled from "styled-components";
import Categories from "../src/components/Homepage/Categories/Categories.component";
import Footer from "../src/components/Footer/Footer.component";

const Line = styled.div`
  margin: 2rem auto;
  width: 950px;
  height: 0px;
  border-bottom: 1px solid ${props => props.theme.black_4};
`;

export default function Home({ data, categoriesLinkList, salesProducts }) {
  return (
    <div>
      <Head>
        <title>Brubeck</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header data={data} categories={categoriesLinkList} />

      <main>
        <Hero data={data} />
        <Sales products={salesProducts} />
        <Line />
        <Section data={data} />
        <Line />
        <Categories data={data} />
        <Line />
      </main>

      <Footer data={data} />
    </div>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  let data = await getHomepageData();
  data = await processHomepageData(data); // Just for Homepage
  const categoriesLinkList = await getMenuCategoriesData();
  const salesProducts = await getProductsByCategoryId(33);

  return {
    props: {
      data,
      categoriesLinkList,
      salesProducts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
