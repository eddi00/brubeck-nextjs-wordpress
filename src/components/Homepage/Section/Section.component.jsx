import Image from "next/image";
import React from "react";
import { ImageContainer, Layout, Text } from "./Section.styles";

const Section = ({ data }) => {
  return (
    <Layout>
      <ImageContainer>
        {data.about_image != null && (
          <Image
            src={data.about_image}
            layout="fill"
            // width="541px"
            // height="480px"
          />
        )}
      </ImageContainer>
      <Text dangerouslySetInnerHTML={{ __html: data.about_text }}></Text>
    </Layout>
  );
};

export default Section;
