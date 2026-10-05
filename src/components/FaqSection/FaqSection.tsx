import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import styled from 'styled-components';
import { QUERIES, WEIGHTS } from '@/utils/constants';
import { FAQ_DATA } from '@/utils/constants';
import { ChevronDown } from 'react-feather';
import Image from 'next/image';

function FaqSection() {
  return (
    <Wrapper id="faq">
      <Heading>Frequently Asked&nbsp;Questions</Heading>

      <SVGImage
        src="/docs/magic-pattern-faq.svg"
        alt=""
        aria-hidden
        fill
        quality={75}
        style={{
          objectFit: 'none',
          objectPosition: 'calc(50% - 300px) calc(50% - 100px)', // left 100px, down 40px
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <Root type="single" collapsible>
        {FAQ_DATA.map(({ label, description }) => (
          <Item key={label} value={label}>
            <Header>
              <Trigger>
                <IconWrapper>
                  <ChevronDown size={32} />
                </IconWrapper>
                <TriggerText>{label}</TriggerText>
              </Trigger>
            </Header>
            <Content>{description}</Content>
          </Item>
        ))}
      </Root>
      <Footer>
        For any other questions, feel free to reach out to us at{' '}
        <a href="mailto:support@linkwarden.app">
          support@linkwarden.app
        </a>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1485px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 25rem;
  padding-top: 3rem;
`;

const Heading = styled.h2`
  font-weight: ${WEIGHTS.bold};
  font-size: clamp(2.3rem, 7vw, 4.5rem);
  line-height: 1.4;
  text-align: center;
  margin-bottom: 5rem;
`;

const SVGImage = styled(Image)`
  overflow: visible;
`;

const Root = styled(Accordion.Root)`
  padding: 60px 80px;
  position: relative;
  border-radius: 16px;
  gap: 8px;
  background: linear-gradient(
    90deg,
    rgba(160, 148, 148, 0.02) 0%,
    rgba(95, 86, 86, 0.1) 100%
  );
  box-shadow: 0 4px 12px rgba(160, 148, 148, 0.15);
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    pointer-events: none;

    background: linear-gradient(
      90deg,
      rgba(236, 200, 200, 0.2) 0%,
      rgba(0, 0, 0, 0.3) 44%,
      rgba(255, 255, 255, 0.15) 100%
    );

    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 16px;
  }
`;

const Item = styled(Accordion.Item)`
  &:last-child ::after {
    content: none;
  }
`;

const Header = styled(Accordion.Header)``;

const TriggerText = styled.p`
  font-size: 2.25rem;
  font-weight: ${WEIGHTS.medium};
  color: var(--color-text);
  text-align: left;
  text-wrap: pretty;

  @media ${QUERIES.laptopAndSmaller} {
    font-size: clamp(1rem, 0.5rem + 2vw, 2.25rem);
  }
`;

const Trigger = styled(Accordion.Trigger)`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  position: relative;
  color: var(--color-text);
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 32px 0;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 4px;
  }

  &[data-state='open'] svg {
    transform: rotate(180deg);
  }

  &::after {
    content: '';
    position: absolute;
    inset: auto 0 0;
    height: 1px;

    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--color-button-ghost-border) 15%,
      var(--color-button-ghost-border) 85%,
      transparent 100%
    );
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;

  @media ${QUERIES.phoneAndSmaller} {
    width: 24px;
  }
`;

const Content = styled(Accordion.Content)`
  padding: 16px 52px;
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.normal};

  @media ${QUERIES.laptopAndSmaller} {
    font-size: clamp(1rem, 0.5rem + 2vw, 1.5rem);
    padding: 16px;
  }
`;

const Footer = styled.p`
  font-size: 2rem;
  text-align: center;
  font-weight: ${WEIGHTS.normal};

  a {
    color: inherit;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1rem;
  }
`;

export default FaqSection;
