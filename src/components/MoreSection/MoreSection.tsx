'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import styled from 'styled-components';
import { WEIGHTS } from '@/utils/constants';
import { cards } from './icons';
import iconsObj from '@/components/MoreSection/icons';
import { QUERIES } from '@/utils/constants';

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function MoreSection() {
  return (
    <Wrapper>
      <Heading>Hold on, there&apos;s&nbsp;more!</Heading>
      <CardsWrapper
        variants={cardsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cards.map(({ label, desc, icon }) => {
          const IconComponent = iconsObj[icon];
          return (
            /* @ts-expect-error motion varinants not typed*/
            <CardWrapper key={icon} variants={cardVariant}>
              <IconWrapper>
                <IconBackground>
                  <IconSize>
                    <IconComponent />
                  </IconSize>
                </IconBackground>
              </IconWrapper>
              <CardHeading>{label}</CardHeading>
              <Description>{desc}</Description>
            </CardWrapper>
          );
        })}
      </CardsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  margin-bottom: 14rem;
`;

const Heading = styled.h2`
  font-weight: ${WEIGHTS.bold};
  font-size: clamp(3rem, 7vw, 4.5rem);
  line-height: 1.4;
  text-align: center;
  margin-bottom: 5rem;

  @media ${QUERIES.phoneAndSmaller} {
    text-align: left;
  }
`;

const CardsWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 42px;
`;

const CardWrapper = styled(motion.div)`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: baseline;
  padding-top: 42px;
  align-items: center;
  width: 419px;
  height: 335px;
  border-radius: 16px;

  background-image:
    url('/docs/cardGradient.svg'), url('/docs/backgroundCard.svg');

  background-repeat: no-repeat, repeat;
  background-position: center, center;
  background-size: cover, contain;
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconBackground = styled.div`
  background-image: url('/docs/backgroundBtn.svg');
  width: 115px;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconSize = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardHeading = styled.h3`
  font-weight: ${WEIGHTS.medium};
  font-size: 1.75rem;
`;

const Description = styled.p`
  max-width: 340px;
  text-align: center;
  font-size: 1.125rem;
`;

export default MoreSection;
