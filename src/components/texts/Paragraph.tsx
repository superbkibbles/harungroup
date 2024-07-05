import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-weight: 200;
  font-size: 12px;
  line-height: 20px;
  margin: 0;
  padding: 0;
`;

interface Props {
  children?: React.ReactNode;
}

const Paragraph: React.FC<Props> = ({ children = "" }) => {
  return <Text>{children}</Text>;
};

export default Paragraph;
