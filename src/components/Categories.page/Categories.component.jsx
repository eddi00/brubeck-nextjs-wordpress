import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ArrowIcon,
  Block,
  Column,
  ImageContainer,
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
          <Link href="/">
            <Block>
              <Text>Термобелье</Text>
              <ArrowIcon size="2.5rem" />
            </Block>
          </Link>
          <Link href="/">
            <Block>
              <Text>Фитнес и бег</Text>
              <ArrowIcon size="2.5rem" />
            </Block>
          </Link>
        </Column>
        <Column>
          <Link href="/">
            <Block>
              <Text>Одежда</Text>
              <ArrowIcon size="2.5rem" />
            </Block>
          </Link>
          <Link href="/">
            <Block>
              <Text>Нижнее бельё</Text>
              <ArrowIcon size="2.5rem" />
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
          <Link href="/">
            <Block>
              <Text>Термобелье</Text>
              <ArrowIcon size="2.5rem" />
            </Block>
          </Link>
          <Link href="/">
            <Block>
              <Text>Фитнес и бег</Text>
              <ArrowIcon size="2.5rem" />
            </Block>
          </Link>
        </Column>
        <Column>
          <Link href="/">
            <Block>
              <Text>Одежда</Text>
              <ArrowIcon size="2.5rem" />
            </Block>
          </Link>
          <Link href="/">
            <Block>
              <Text>Нижнее бельё</Text>
              <ArrowIcon size="2.5rem" />
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
          <Link href="/">
            <Block>
              <Text>Термобелье</Text>
              <ArrowIcon size="2.5rem" />
            </Block>
          </Link>
          <Link href="/">
            <Block>
              <Text>Фитнес и бег</Text>
              <ArrowIcon size="2.5rem" />
            </Block>
          </Link>
        </Column>
        <Column>
          <Link href="/">
            <Block>
              <Text>Одежда</Text>
              <ArrowIcon size="2.5rem" />
            </Block>
          </Link>
          <Link href="/">
            <Block>
              <Text>Нижнее бельё</Text>
              <ArrowIcon size="2.5rem" />
            </Block>
          </Link>
        </Column>
      </Section>
      <Line />
    </Layout>
  );
};

export default CategoriesPage;
