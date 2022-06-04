import React from "react";
import Details from "./Details/Details.component";
import Images from "./Images/Images.component";
import { Layout, TopSection } from "./Product.styles";

const Product = ({ product }) => {
  return (
    <Layout>
      <TopSection>
        <Images />
        <Details product={product} />
      </TopSection>
      Description
    </Layout>
  );
};

export default Product;
