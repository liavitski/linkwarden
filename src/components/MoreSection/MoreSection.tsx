import * as React from 'react';
import styled from 'styled-components';
import { WEIGHTS } from '@/utils/constants';
import { cards } from './icons';
import iconsObj from '@/components/MoreSection/icons';

function MoreSection() {
  return (
    <Wrapper>
      <Heading>Hold on, there&apos;s more!</Heading>
      <CardsWrapper>
        {cards.map(({ label, desc, icon }) => {
          const IconComponent = iconsObj[icon];
          return (
            <CardWrapper key={icon}>
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
`;

const Heading = styled.h2`
  font-weight: ${WEIGHTS.bold};
  font-size: 4.5rem;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 5rem;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 42px;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: baseline;
  padding-top: 42px;
  align-items: center;
  width: 479px;
  height: 335px;
  border-radius: 16px;

  background-image:
    url('/docs/cardGradient.svg'),
    url('/docs/backgroundCard.svg');

  background-repeat: no-repeat, no-repeat;
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
  font-size: 1rem;
`;

export default MoreSection;
