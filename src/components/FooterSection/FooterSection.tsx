import * as React from 'react';

import styled from 'styled-components';
import FooterSvgPattern from './SvgPattern';
import Logo from '../Logo';
import Image from 'next/image';

import { WEIGHTS } from '@/utils/constants';
import {
  StartFreeTrialBtn,
  StarUsOnGitHubBtn,
  ButtonsWrapper,
} from '../Hero';
import { LogoSvg } from '../Logo';

function FooterSection() {
  return (
    <Wrapper>
      <FooterSvgPattern />
      <SubHeading>14-day free trial, cancel anytime</SubHeading>
      <Heading>Start your bookmarking journey</Heading>
      <ButtonsWrapper>
        <StartFreeTrialBtn>Start Free Trial</StartFreeTrialBtn>
        <StarUsOnGitHubBtn>Start Us On GitHub</StarUsOnGitHubBtn>
      </ButtonsWrapper>

      <Footer>
        <LogoArea>
          <LogoSvg width='310' height='68' />
          <LogoSubHeading>
            Linkwarden is a fully self-hostable, open-source
            collaborative bookmark manager.
          </LogoSubHeading>
        </LogoArea>

        <LinksArea>
          <LinksHeading>Useful links</LinksHeading>
          <LinksWrapper>
            <LinkItem>Features</LinkItem>
            <LinkItem>Pricing</LinkItem>
            <LinkItem>FAQs</LinkItem>
            <LinkItem>Docs</LinkItem>
            <LinkItem>Blog</LinkItem>
            <LinkItem>Terms of Services</LinkItem>
            <LinkItem>Privacy Policy</LinkItem>
          </LinksWrapper>
        </LinksArea>

        <ContactArea>
          <ContactsHeading>Contact Us</ContactsHeading>
          <a href="mailto:support@linkwarden.app">
            support@linkwarden.app
          </a>
          <IconsWrapper>
            <Image
              src="/docs/discord.svg"
              alt="logo"
              width={32}
              height={32}
            />
            <Image
              src="/docs/m.svg"
              alt="logo"
              width={32}
              height={32}
            />
            <Image
              src="/docs/x.svg"
              alt="logo"
              width={32}
              height={32}
            />
            <Image
              src="/docs/gitHub.svg"
              alt="logo"
              width={32}
              height={32}
            />
          </IconsWrapper>
        </ContactArea>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 42px;
  max-width: 1300px;
`;

const Heading = styled.h2`
  font-weight: ${WEIGHTS.bold};
  font-size: 4.5rem;
  text-align: center;
  max-width: 1221px;
  line-height: 1;
`;

const SubHeading = styled.h3`
  font-size: 2.25rem;
  font-weight: ${WEIGHTS.medium};
`;

const Footer = styled.div`
  margin-top: 150px;
  display: flex;
  gap: 150px;
  align-items: baseline;
`;

const LogoArea = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const LogoSubHeading = styled.p`
  font-weight: ${WEIGHTS.normal};
`;

const LinksArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const LinksHeading = styled.h4`
  font-size: 1.5rem;
  line-height: 1;
  font-weight: ${WEIGHTS.medium};
`;

const LinksWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LinkItem = styled.li`
  font-weight: ${WEIGHTS.normal};
`;

const ContactArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  a {
    color: inherit;
    font-weight: ${WEIGHTS.normal};
    font-size: 1.2rem;
    line-height: 1;
  }
`;

const ContactsHeading = styled.h4`
  font-size: 1.5rem;
  line-height: 1;
  font-weight: ${WEIGHTS.medium};
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export default FooterSection;
