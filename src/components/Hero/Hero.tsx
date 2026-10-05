import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { QUERIES, WEIGHTS } from '@/utils/constants';
import Star from '@/utils/StarSvg';
import CtaButton from '../CtaButton';

function Hero() {
  return (
    <Wrapper>
      <Heading>Webpage Management for Individuals and Teams</Heading>
      <SubHeading>
        <DesctopText>
          Linkwarden is a fully self-hostable, open-source
          collaborative bookmark manager to collect, organize and
          archive webpages.
        </DesctopText>
      </SubHeading>
      <ButtonsWrapper>
        <StartFreeTrialBtn href="#pricing">Start Free Trial</StartFreeTrialBtn>

        <StarUsOnGitHubLink
          href="https://github.com/linkwarden/linkwarden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Star />
          <span>Star Us On GitHub</span>
        </StarUsOnGitHubLink>
      </ButtonsWrapper>

      <SVGImage
        src="/docs/magic-pattern-hero.svg"
        alt=""
        aria-hidden
        fill
        style={{
          objectFit: 'none',
          objectPosition: 'center',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <ImageWrapper>
        <Image
          src="/docs/hero.jpg"
          alt="Portfolio project preview"
          width={1287}
          height={810}
          fetchPriority="high"
          sizes="100vw"
          quality={75}
        />
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 80px;
  max-width: 1490px;
  position: relative;
`;

export const Heading = styled.h1`
  font-weight: ${WEIGHTS.bold};
  text-align: center;
  max-width: 1250px;
  line-height: 1.4;
  margin-bottom: 2.5rem;
  font-size: min(5rem, 7vw);

  @media ${QUERIES.phoneAndSmaller} {
    text-align: left;
  }
`;

const SubHeading = styled.h2`
  max-width: 1000px;
  text-align: center;
  margin-bottom: 3rem;
  line-height: 1;

  @media ${QUERIES.phoneAndSmaller} {
    text-align: left;
  }
`;

const SVGImage = styled(Image)`
  -webkit-mask-image:
    linear-gradient(
      to right,
      transparent 0,
      black 32rem,
      black calc(100% - 32rem),
      transparent 100%
    ),
    linear-gradient(
      to bottom,
      transparent 0,
      black 32rem,
      black calc(100% - 32rem),
      transparent 100%
    );

  -webkit-mask-composite: source-in;
  mask-composite: intersect;
`;

// const MagicPattern = styled.div`
//   position: absolute;
//   inset: 0;
//   z-index: -1;
//   pointer-events: none;

//   background: url('/docs/magic-pattern-hero.svg') center / auto
//     no-repeat;

//   /* Equal fade on all 4 sides */
//   -webkit-mask-image:
//     linear-gradient(
//       to right,
//       transparent 0,
//       black 32rem,
//       black calc(100% - 32rem),
//       transparent 100%
//     ),
//     linear-gradient(
//       to bottom,
//       transparent 0,
//       black 32rem,
//       black calc(100% - 32rem),
//       transparent 100%
//     );

//   -webkit-mask-composite: source-in;
//   mask-composite: intersect;
// `;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 3rem;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

export const StartFreeTrialBtn = styled(CtaButton)`
  background: linear-gradient(90deg, #673ab7 0%, #4b03cd 100%);
  transition: filter 600ms;

  &:hover,
  &:focus {
    transition: filter 250ms;
    filter: brightness(130%);
  }
`;

export const StarUsOnGitHubLink = styled.a`
  background: #00000031;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  text-decoration: none;
  gap: 8px;
  border: 2px solid var(--color-button-ghost-border);
  transition: filter 600ms;
  margin: 0;
  padding: 0;
  cursor: pointer;
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

  &:hover,
  &:focus {
    transition: filter 250ms;
    filter: brightness(130%);
  }
`;

const DesctopText = styled.span`
  font-weight: ${WEIGHTS.medium};
  font-size: clamp(1rem, 2vw, 1.5rem);
`;

const ImageWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  width: fit-content;
`;

export default Hero;
