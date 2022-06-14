import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Category, ImageContainer, Layout } from "./Categories.styles";

const Categories = ({ data }) => {
  return (
    <Layout>
      <ImageContainer>
        <Image src={data.category_one_image} layout="fill" />
        <Link href={data.category_one_link}>
          <Button>{data.category_one_text}</Button>
        </Link>
      </ImageContainer>
      <ImageContainer>
        <Image src={data.category_two_image} layout="fill" />
        <Link href={data.category_two_link}>
          <Button>{data.category_two_text}</Button>
        </Link>
      </ImageContainer>
      <ImageContainer>
        <Image src={data.category_three_image} layout="fill" />
        <Link href={data.category_three_link}>
          <Button>{data.category_three_text}</Button>
        </Link>
      </ImageContainer>
    </Layout>
  );
};

export default Categories;
