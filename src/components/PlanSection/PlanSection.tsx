'use client';

import * as React from 'react';
import styled from 'styled-components';
import { QUERIES, WEIGHTS } from '@/utils/constants';
import { motion } from 'motion/react';
import type { Transition } from 'motion/react';
import PlanCard from '../PlanCard';
import { CARDS_DATA } from '@/utils/constants';
import type { PlanType } from '../PlanCard';

const transition: Transition = {
  type: 'spring',
  stiffness: 350,
  damping: 30,
  mass: 0.8,
};

function PlanSection() {
  const [planType, setPlanType] = React.useState<PlanType>('monthly');

  return (
    <Wrapper>
      <Header>
        <MaxWidthWrapper>
          <ButtonSelectionWrapper>
            <Tag
              initial={{ x: 30, y: -20, rotate: 25 }}
              animate={
                planType === 'yearly'
                  ? {
                      x: [30, 25, 35, 28, 32, 30],
                      y: [-20, -18, -22, -19, -21, -20],
                      rotate: [25, 22, 28, 24, 26, 25],
                    }
                  : { x: 30, y: -20, rotate: 25 }
              }
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
              }}
            >
              25% Off
            </Tag>

            <Button onClick={() => setPlanType('monthly')}>
              {planType === 'monthly' && (
                <ActiveBg
                  layoutId="active-bg"
                  transition={transition}
                />
              )}
              <span>Monthly</span>
            </Button>

            <Button onClick={() => setPlanType('yearly')}>
              {planType === 'yearly' && (
                <ActiveBg
                  layoutId="active-bg"
                  transition={transition}
                />
              )}
              <span>Yearly</span>
            </Button>
          </ButtonSelectionWrapper>
        </MaxWidthWrapper>
        <Heading>Pick the Right Plan for&nbsp;You</Heading>
      </Header>

      <CardsList>
        {CARDS_DATA.map(({ subtitle, features, variant }, index) => {
          const gridAreas = ['a', 'b', 'c'];
          return (
            <PlanCard
              gridArea={gridAreas[index]}
              key={variant}
              subtitle={subtitle}
              features={features}
              variant={variant}
              planType={planType}
            />
          );
        })}
      </CardsList>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1650px;
  margin: 0 auto;
  margin-bottom: 25rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const MaxWidthWrapper = styled.div`
  max-width: 621px;
  width: 100%;
  margin: 0 auto;
`;

const ActiveBg = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--color-plan-button-active);
  z-index: 0;
`;

const ButtonSelectionWrapper = styled.div`
  position: relative;
  border-radius: 40px;
  border: 1px solid var(--color-plan-buttons-border);
  display: flex;
  padding: 6px;
  gap: 8px;
  width: 100%;
  margin: 0 auto;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 2px;
    width: 90%;
  }
`;

const Tag = styled(motion.div)`
  position: absolute;
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
  top: 0;
  right: 0;
  z-index: 1;
  padding: 2px 12px;
  background-color: var(--color-plan-buttons-tag-bg);
  border-radius: 10px;
  transform-origin: center;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1rem;
    padding: 2px 8px;
  }
`;

const Button = styled.button`
  width: 100%;
  position: relative;
  padding: 4px 0;
  margin: 0;
  border: none;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
  background: transparent;
  font-size: 1.8rem;
  font-weight: ${WEIGHTS.medium};
  border-radius: 40px;
  text-align: center;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1rem;
  }

  span {
    position: relative;
    z-index: 1;
  }

  &:hover {
    color: var(--color-text-hover);
  }
`;

const Heading = styled.h2`
  font-weight: ${WEIGHTS.bold};
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  line-height: 1.4;
  text-align: center;
  margin-bottom: 5rem;
`;

const CardsList = styled.div`
  display: grid;

  grid-template-columns: 1fr 1.3fr 1fr;
  gap: 54px;
  grid-template-areas: 'a b c';
  align-items: center;

  @media ${QUERIES.laptopAndSmaller} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'b b'
      'a c';
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'b'
      'c'
      'a';
  }
`;

export default PlanSection;
