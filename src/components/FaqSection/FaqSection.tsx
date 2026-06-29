import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import styled from 'styled-components';
import { WEIGHTS } from '@/utils/constants';
import { FAQ_DATA } from '@/utils/constants';
import { ChevronDown } from 'react-feather';

function FaqSection() {
  return (
    <Wrapper>
      <Heading>Frequently Asked Questions</Heading>
      <Root type="single" collapsible>
        {FAQ_DATA.map(({ label, description }, index) => (
          <Item key={index} value={label}>
            <Header>
              <Trigger>
                <ChevronDown size={32} />
                {label}
              </Trigger>
            </Header>
            <Content>{description}</Content>
          </Item>
        ))}
      </Root>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1485px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-weight: ${WEIGHTS.bold};
  font-size: 4.5rem;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 5rem;
`;

const Root = styled(Accordion.Root)`
  padding: 60px 80px;
  position: relative;
  border-radius: 16px;
  background: transparent;
  box-shadow: 0 4px 12px rgba(160, 148, 148, 0.15);
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: inherit;
    pointer-events: none;

    background: linear-gradient(
      90deg,
      rgba(236, 200, 200, 0.1) 0%,
      rgba(0, 0, 0, 0.3) 44%,
      rgba(255, 255, 255, 0.2) 100%
    );

    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const Item = styled(Accordion.Item)``;

const Header = styled(Accordion.Header)``;

const Trigger = styled(Accordion.Trigger)`
  display: flex;
  gap: 16px;
  position: relative;
  font-size: 2.25rem;
  font-weight: ${WEIGHTS.medium};
  color: inherit;
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 32px 0;

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

const Content = styled(Accordion.Content)`
  padding: 16px 52px;
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.normal};
`;

export default FaqSection;
