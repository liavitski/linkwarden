import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { WEIGHTS } from '@/utils/constants';
import MagicPatternSvg from '@/utils/MagicPattern';
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
        <StartFreeTrialBtn>Start Free Trial</StartFreeTrialBtn>

        <StarUsOnGitHubBtn>
          <Star />
          <span>Star Us On GitHub</span>
        </StarUsOnGitHubBtn>
      </ButtonsWrapper>
      <MagicPatternSvg />
      <ImageWrapper>
        <Image
          src="/docs/hero.jpg"
          alt="Portfolio project preview"
          width={1287}
          height={810}
          preload
          sizes="100vw"
          quality={85}
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
  position: relative;
  margin-bottom: 80px;
`;

export const Heading = styled.h1`
  font-weight: ${WEIGHTS.bold};
  font-size: 5rem;
  text-align: center;
  max-width: 1250px;
  line-height: 1.4;
  margin-bottom: 2.5rem;
`;

const SubHeading = styled.h2`
  max-width: 1000px;
  text-align: center;
  margin-bottom: 3rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 3rem;
`;

export const StartFreeTrialBtn = styled(CtaButton)`
  background: linear-gradient(90deg, #673ab7 0%, #4b03cd 100%);
`;

export const StarUsOnGitHubBtn = styled(CtaButton)`
  background: #00000031;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  gap: 8px;
  border: 2px solid var(--color-button-ghost-border);
`;

const DesctopText = styled.span`
  font-weight: ${WEIGHTS.medium};
  font-size: 1.5rem;
`;

const ImageWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  width: fit-content;
`;

export default Hero;
