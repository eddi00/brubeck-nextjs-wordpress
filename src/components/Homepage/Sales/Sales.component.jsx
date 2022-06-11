import Link from "next/link";
import React from "react";
import {
  ButtonShop,
  Layout,
  ProductGrid,
  ShortLine,
  Title,
} from "./Sales.styles";
import ProductCard from "./ProductCard/ProductCard.component";

const Sales = ({ products }) => {
  return (
    <Layout>
      <ShortLine />
      <Title>Распродажа</Title>
      <ProductGrid>
        {products &&
          products
            .slice(0, 8)
            .map((item, index) => <ProductCard key={index} product={item} />)}
      </ProductGrid>
      <Link href="/shop">
        <ButtonShop>
          <h5>ПЕРЕЙТИ В МАГАЗИН</h5>
        </ButtonShop>
      </Link>
    </Layout>
  );
};

export default Sales;
