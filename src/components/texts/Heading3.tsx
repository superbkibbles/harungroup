import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const Text = styled.h3`
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

export const Heading3: React.FC<Props> = ({ children = "" }) => {
  return <Text>{children}</Text>;
};
