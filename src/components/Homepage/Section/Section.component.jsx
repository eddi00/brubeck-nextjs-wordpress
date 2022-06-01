import Image from "next/image";
import React from "react";
import { Layout, Text } from "./Section.styles";

const SectionHomepage = ({ data }) => {
  return (
    <Layout>
      {data.about_image != null && (
        <img
          src={data.about_image}
          layout="responsive"
          width="541px"
          height="480px"
        />
      )}
      <Text dangerouslySetInnerHTML={{ __html: data.about_text }}></Text>
    </Layout>
  );
};

export default SectionHomepage;
