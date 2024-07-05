import Logo from "@/components/Logo";
import { Box, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { mBreakPoint, sBreakPoint } from "@/constants";
import { Heading3 } from "@/components/texts/Heading3";
import Paragraph from "@/components/texts/Paragraph";

const FooterContainer = styled.footer`
  background-color: var(--black-color);
  color: var(--white-paragraph-color);
  padding-inline: 150px;
  padding-top: 40px;

  @media (max-width: ${mBreakPoint}) {
    padding-inline: 60px;
  }

  @media (max-width: ${sBreakPoint}) {
    padding-inline: 5px;
  }
`;

const AboutCompanyContainer = styled(Box)`
  max-width: 300px;
`;

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 100%;
  margin: 20px 0;
  height: 1px;
  background-color: #fffcfc;
`;

const BottomContainer = styled(Box)`
  display: flex;
  padding-bottom: 10px;
`;

const List = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;
const Item = styled.li`
  font-weight: 200;
  font-size: 12px;
  line-height: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container gap={1}>
        <Grid item md={5} sm={12}>
          <AboutCompanyContainer>
            <LogoContainer>
              <Logo />
              <Heading3>Harungroup</Heading3>
            </LogoContainer>
            <Paragraph>
              Company was able during this period oftime ot acquire many of the
              experiences and formed a large network of business relationships
              and was able to earn a good reputation ni the field of commercial
              in Iraqi &we are working hard to gain more experience and expand
              more in all fields And we have the wil and determina- tion to
              progress larger HARUN GROUP Founded ni 1977.
            </Paragraph>
          </AboutCompanyContainer>
        </Grid>
        <Grid item md={2} sm={5.5} xs={12}>
          <Heading3>Resources to download</Heading3>
          <List>
            <Item>Company profile</Item>
            <Item>Example</Item>
            <Item>Another company</Item>
          </List>
        </Grid>
        <Grid item md={2} sm={5.5} xs={12}>
          <Heading3>Useful Pages</Heading3>
          <List>
            <Item>Home page</Item>
            <Item>About us</Item>
          </List>
        </Grid>
        <Grid item md={2} sm={5.5} xs={12}>
          <Heading3>Contact us</Heading3>
          <List>
            <Item>
              IBRAHIM KHALIL INTERNATIONAL STREET ARCELIK PLAZA ZAKHO-IRAO
            </Item>
            <Item>009647504545182</Item>
          </List>
        </Grid>
      </Grid>
      <Line />
      <BottomContainer>
        <Paragraph>Copyright © Harungroup</Paragraph>
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
