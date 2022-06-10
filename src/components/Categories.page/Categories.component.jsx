import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowIcon,
  Block,
  Column,
  Layout,
  Line,
  Section,
  Text,
} from "./Categories.styles";

const CategoriesPage = () => {
  return (
    <Layout>
      <h2>Категории</h2>
      <Section>
        <Image
          src="http://data.brubeck.ru.xsph.ru/wp-content/uploads/2022/05/Categories-3-image-2.png"
          width="378px"
          height="400px"
        />
        <Column>
          <Link href="/shop?category=men&category=thermal">
            <Block>
              <Text>Термобелье</Text>
              <ArrowIcon size="40" />
            </Block>
          </Link>
          <Link href="/shop?category=men&category=fitness">
            <Block>
              <Text>Фитнес и бег</Text>
              <ArrowIcon size="40" />
            </Block>
          </Link>
        </Column>
        <Column>
          <Link href="/shop?category=men">
            <Block>
              <Text>Одежда</Text>
              <ArrowIcon size="40" />
            </Block>
          </Link>
          <Link href="/shop?category=men&category=underware">
            <Block>
              <Text>Нижнее бельё</Text>
              <ArrowIcon size="40" />
            </Block>
          </Link>
        </Column>
      </Section>
      <Line />
      <Section>
        <Image
          src="http://data.brubeck.ru.xsph.ru/wp-content/uploads/2022/05/Categories-3-image-3.png"
          width="378px"
          height="400px"
        />
        <Column>
          <Link href="/shop?category=women&category=thermal">
            <Block>
              <Text>Термобелье</Text>
              <ArrowIcon size="40" />
            </Block>
          </Link>
          <Link href="/shop?category=women&category=fitness">
            <Block>
              <Text>Фитнес и бег</Text>
              <ArrowIcon size="40" />
            </Block>
          </Link>
        </Column>
        <Column>
          <Link href="/shop?category=women">
            <Block>
              <Text>Одежда</Text>
              <ArrowIcon size="40" />
            </Block>
          </Link>
          <Link href="/shop?category=women&category=underware">
            <Block>
              <Text>Нижнее бельё</Text>
              <ArrowIcon size="40" />
            </Block>
          </Link>
        </Column>
      </Section>
      <Line />
      <Section>
        <Image
          src="http://data.brubeck.ru.xsph.ru/wp-content/uploads/2022/05/Categories-3-image-4.png"
          width="378px"
          height="400px"
        />
        <Column>
          <Link href="/shop?category=boys&category=girls&category=thermal">
            <Block>
              <Text>Термобелье</Text>
              <ArrowIcon size="40" />
            </Block>
          </Link>
          <Link href="/shop?category=boys&category=girls&category=fitness">
            <Block>
              <Text>Фитнес и бег</Text>
              <ArrowIcon size="40" />
            </Block>
          </Link>
        </Column>
        <Column>
          <Link href="/shop?category=boys&category=girls">
            <Block>
              <Text>Одежда</Text>
              <ArrowIcon size="40" />
            </Block>
          </Link>
          <Link href="/shop?category=boys&category=girls&category=underware">
            <Block>
              <Text>Нижнее бельё</Text>
              <ArrowIcon size="40" />
            </Block>
          </Link>
        </Column>
      </Section>
      <Line />
    </Layout>
  );
};

export default CategoriesPage;
