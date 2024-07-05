import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: clamp(10px, 40px, 80px);
`;

interface Props {
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Section;
