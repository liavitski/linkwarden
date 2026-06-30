import * as React from 'react';

import styled from 'styled-components';
import FooterSvgPattern from './SvgPattern';
import Link from 'next/link';
import Image from 'next/image';

import { WEIGHTS } from '@/utils/constants';
import { StartFreeTrialBtn, StarUsOnGitHubBtn } from '../Hero';
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
          <LogoSvg width="310" height="68" />
          <LogoSubHeading>
            Linkwarden is a fully self-hostable, open-source
            collaborative bookmark&nbsp;manager.
          </LogoSubHeading>
        </LogoArea>

        <SecondColumn>
          <LinksArea>
            <LinksHeading>Useful links</LinksHeading>
            <LinksWrapper>
              <LinkItem>
                <Link href={'/'}>Features</Link>
              </LinkItem>
              <LinkItem>
                <Link href={'/'}>Pricing</Link>
              </LinkItem>
              <LinkItem>
                <Link href={'/'}>FAQs</Link>
              </LinkItem>
              <LinkItem>
                <Link href={'/'}>Docs</Link>
              </LinkItem>
              <LinkItem>
                <Link href={'/'}>Blog</Link>
              </LinkItem>
              <LinkItem>
                <Link href={'/'}>Terms of Services</Link>
              </LinkItem>
              <LinkItem>
                <Link href={'/'}>Privacy Policy</Link>
              </LinkItem>
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
        </SecondColumn>
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

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const SubHeading = styled.h3`
  font-size: 2.25rem;
  font-weight: ${WEIGHTS.medium};
`;

const Footer = styled.div`
  margin-top: 110px;
  display: flex;
  gap: 150px;
`;

const LogoArea = styled.div`
  max-width: 350px;
  margin-top: -25px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SecondColumn = styled.div`
  display: flex;
  gap: 150px;
`;

const LogoSubHeading = styled.p`
  font-weight: ${WEIGHTS.normal};
  color: #cecece;
  padding-left: 6px;
`;

const LinksArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-self: flex-start;
`;

const LinksHeading = styled.h4`
  font-size: 1.5rem;
  line-height: 1;
  font-weight: ${WEIGHTS.medium};
`;

const LinksWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LinkItem = styled.li`
  font-weight: ${WEIGHTS.normal};

  a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: ${WEIGHTS.normal};
  }
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
