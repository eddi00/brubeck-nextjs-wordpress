import Link from "next/link";
import React from "react";
import { Button, Category, Layout } from "./Categories.styles";

const Categories = ({ data }) => {
  return (
    <Layout>
      <Category src={data.category_one_image}>
        <Link href={data.category_one_link}>
          <Button>{data.category_one_text}</Button>
        </Link>
      </Category>
      <Category src={data.category_two_image}>
        <Link href={data.category_two_link}>
          <Button>{data.category_two_text}</Button>
        </Link>
      </Category>
      <Category src={data.category_three_image}>
        <Link href={data.category_three_link}>
          <Button>{data.category_three_text}</Button>
        </Link>
      </Category>
    </Layout>
  );
};

export default Categories;
