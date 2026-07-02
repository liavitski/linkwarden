'use client';
import * as React from 'react';

import { motion } from 'motion/react';
import styled from 'styled-components';
import { QUERIES } from '@/utils/constants';
import { WEIGHTS } from '@/utils/constants';
import Image from 'next/image';
import MagicPatternSvg2 from '@/utils/MagicPattern2';

const headingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function CollectSection() {
  return (
    <Section id="features">
      <MagicPatternSvg2 />
      <CollectBtn>Collect & Organize</CollectBtn>
      <ContentWrapper>
        <PresentationBit>
          <Heading
            // @ts-expect-error motion varinants not typed
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            Collect and Organize&nbsp;Webpages
          </Heading>
          <ListWrapper
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* @ts-expect-error motion varinants not typed*/}
            <ListItem variants={listItem}>
              Collect webpages and bookmarks from any&nbsp;browser
            </ListItem>
            {/* @ts-expect-error motion varinants not typed*/}
            <ListItem variants={listItem}>
              Organize your Links with Collections and&nbsp;Tags
            </ListItem>
            {/* @ts-expect-error motion varinants not typed*/}
            <ListItem variants={listItem}>
              Create new Collections to group related&nbsp;Links
            </ListItem>
          </ListWrapper>
        </PresentationBit>

        <ImageWrapper
          // @ts-expect-error motion varinants not typed
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Image
            src="/docs/collect.jpg"
            width={844}
            height={669}
            alt="Collect and Organize photo example"
          />
        </ImageWrapper>
      </ContentWrapper>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1650px;
  margin: 0 auto;
  gap: 72px;
  margin-bottom: 23rem;
  padding-top: 3rem;
`;

const CollectBtn = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
  width: 327px;
  height: 74px;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${WEIGHTS.medium};
  font-size: 1.5rem;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.317);

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  border: 2px solid var(--color-button-ghost-border);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      30deg,
      #ecc8c827 0%,
      rgba(0, 0, 0, 0.3) 35%,
      rgba(0, 0, 0, 0.18) 48%,
      rgba(0, 0, 0, 0.1) 55%,
      rgba(255, 255, 255, 0.05) 100%
    );
    opacity: 1;
    transition: opacity 200ms ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      30deg,
      #ecc8c840 0%,
      rgba(0, 0, 0, 0.35) 40%,
      rgba(0, 0, 0, 0.22) 48%,
      rgba(0, 0, 0, 0.12) 55%,
      rgba(255, 255, 255, 0.08) 100%
    );
    opacity: 0;
    transition: opacity 400ms ease;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 36px;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

const PresentationBit = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: clamp(1rem, 4vw, 2rem);
`;

const Heading = styled(motion.h2)`
  font-weight: ${WEIGHTS.bold};
  line-height: 1.4;
  font-size: clamp(2rem, 4vw, 3rem);

  @media ${QUERIES.phoneAndSmaller} {
    text-align: left;
  }
`;

const ListWrapper = styled(motion.ul)`
  padding: 0;
`;

const ListItem = styled(motion.li)`
  list-style-type: none;
  display: flex;
  align-items: center;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  font-weight: ${WEIGHTS.medium};

  &::before {
    content: '';
    width: 22px;
    height: 22px;
    margin-right: 8px;
    background: url('/docs/tick.svg') no-repeat center;
    background-size: contain;
  }
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  border-radius: 28px;
`;

export default CollectSection;
