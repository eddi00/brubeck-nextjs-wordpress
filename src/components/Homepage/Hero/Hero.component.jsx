import React from "react";
import {
  HeroImageOne,
  HeroSubtitle,
  HeroText,
  HeroTitle,
  HorizontalGrid,
  Layout,
  Shadow,
  TextGrid,
} from "./Hero.styles";

const Hero = ({ data }) => {
  return (
    <Layout>
      <HorizontalGrid>
        <TextGrid>
          <div></div>
          <HeroText>
            <h1>{data.hero_title}</h1>
            <HeroSubtitle>{data.hero_subtitle}</HeroSubtitle>
          </HeroText>
        </TextGrid>
        <HeroImageOne
          src={data.hero_first_image}
          height="480px"
          width={"380"}
        />
        <HeroImageOne
          src={data.hero_second_image_copy}
          height="480px"
          width={"380"}
        />
      </HorizontalGrid>
      {/* <Shadow /> */}
    </Layout>
  );
};

export default Hero;
