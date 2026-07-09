import * as React from 'react';

import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../Logo';

import { QUERIES, WEIGHTS } from '@/utils/constants';
import { StartFreeTrialBtn, StarUsOnGitHubLink } from '../Hero';
import Star from '@/utils/StarSvg';

function FooterSection() {
  return (
    <Wrapper>
      <SVGImage
        src="/docs/magic-pattern-faq.svg"
        alt=""
        aria-hidden
        fill
        style={{
          objectFit: 'none',
          objectPosition: 'calc(50% + 300px) calc(50% - 80px)', // left 100px, down 40px
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <SubHeading>14-day free trial, cancel anytime</SubHeading>
      <Heading>Start your bookmarking journey</Heading>
      <ButtonsWrapper>
        <StartFreeTrialBtn>Start Free Trial</StartFreeTrialBtn>
        <StarUsOnGitHubLink
          href="https://github.com/linkwarden/linkwarden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Star />
          <span>Star Us On GitHub</span>
        </StarUsOnGitHubLink>
      </ButtonsWrapper>

      <Footer>
        <LogoArea>
          <Logo width={310} height={68} />

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
                style={{ width: '48px', height: 'auto' }}
              />
              <Image
                src="/docs/m.svg"
                alt="logo"
                width={32}
                height={32}
                style={{ width: '48px', height: 'auto' }}
              />
              <Image
                src="/docs/x.svg"
                alt="logo"
                width={32}
                height={32}
                style={{ width: '48px', height: 'auto' }}
              />
              <Image
                src="/docs/gitHub.svg"
                alt="logo"
                width={32}
                height={32}
                style={{ width: '48px', height: 'auto' }}
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
  padding-bottom: 64px;
  position: relative;
`;

const SVGImage = styled(Image)`
  overflow: visible;
`;

const Heading = styled.h2`
  font-weight: ${WEIGHTS.bold};
  font-size: clamp(2.3rem, 7vw, 4.5rem);
  text-align: center;
  max-width: 1221px;
  line-height: 1;
  text-wrap: balance;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 40px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

const SubHeading = styled.h3`
  font-size: clamp(1.25rem, 2vw, 2.25rem);
  font-weight: ${WEIGHTS.medium};
`;

const Footer = styled.div`
  margin-top: 110px;
  display: flex;
  gap: 150px;
  justify-content: center;
  flex-wrap: wrap;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 96px;
  }
`;

const LogoArea = styled.div`
  max-width: 350px;
  margin-top: -25px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
  }
`;

const SecondColumn = styled.div`
  display: flex;
  gap: 150px;
  flex-wrap: wrap;
  justify-content: center;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 96px;
  }
`;

const LogoSubHeading = styled.p`
  font-weight: ${WEIGHTS.normal};
  color: #cecece;
  padding-left: 6px;

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
  }
`;

const LinksArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-self: flex-start;
  flex-shrink: 0;
`;

const LinksHeading = styled.h4`
  font-size: 1.5rem;
  line-height: 1;
  font-weight: ${WEIGHTS.medium};

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
  }
`;

const LinksWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
  }
`;

const LinkItem = styled.li`
  font-weight: ${WEIGHTS.normal};

  a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: ${WEIGHTS.normal};
    transition: color 500ms;

    &:hover,
    &:focus {
      color: var(--color-text-hover);
      transition: color 250ms;
    }
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

  @media ${QUERIES.phoneAndSmaller} {
    align-items: center;
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
