import * as React from 'react';
import styled from 'styled-components';
import { QUERIES, WEIGHTS } from '@/utils/constants';
import {
  cardsFirstRow,
  cardsSecondRow,
  iconsFirstRow,
  iconsSecondRow,
} from './icons';

function UseCasesSection() {
  return (
    <Wrapper>
      <Heading>Exploring The&nbsp;Use&nbsp;Cases</Heading>
      <UseCasesWrapper>
        <FirstRow>
          {cardsFirstRow.map(({ label, icon }) => {
            const IconComponent = iconsFirstRow[icon];
            return (
              <CardWrapper key={label}>
                <IconWrapper>
                  <IconComponent />
                </IconWrapper>
                <HeadingFirstRow>{label}</HeadingFirstRow>
              </CardWrapper>
            );
          })}
        </FirstRow>

        <SecondRow>
          {cardsSecondRow.map(({ label, icon, desc }) => {
            const IconComponent = iconsSecondRow[icon];
            return (
              <CardSecondRowWrapper key={label}>
                <LeftRow>
                  <IconWrapperSecondRow>
                    <IconComponent />
                  </IconWrapperSecondRow>
                </LeftRow>
                <RightRow>
                  <HeadingSecondRow>{label}</HeadingSecondRow>
                  <DescriptionSecondRow>{desc}</DescriptionSecondRow>
                </RightRow>
              </CardSecondRowWrapper>
            );
          })}
        </SecondRow>
      </UseCasesWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 22rem;
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

const UseCasesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 94px;
  }
`;

const FirstRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 1425px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: 715px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 316px;
  height: 183px;
  border-radius: 24px;
  border: 2px solid var(--color-button-ghost-border);

  @media (max-width: 1425px) {
    &:nth-child(even) {
      justify-self: end;
    }
  }

  @media (max-width: 1425px) {
    &:nth-child(odd) {
      justify-self: start;
    }
  }

  @media (max-width: 715px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    &:nth-child(even) {
      justify-self: auto;
    }

     &:nth-child(odd) {
      justify-self: auto;
    }
  }

  &:first-of-type {
    border: none;
    background: linear-gradient(
      to top right,
      #3a00a1 0%,
      #5a2bbf 40%,
      #673ab7 100%
    );
  }
`;

const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
`;

const HeadingFirstRow = styled.h3``;

const SecondRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 120px 120px;
  gap: 60px;

    @media (max-width: 1184px) {
     grid-template-columns: 1fr;
     grid-template-rows: auto;
     justify-items: center;
  }
`;

const CardSecondRowWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
  }
`;

const LeftRow = styled.div`
  align-self: center;
`;

const IconWrapperSecondRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 117px;
  height: 117px;
  border: 2px solid var(--color-button-ghost-border);
  border-radius: 1000px;
  background: linear-gradient(
    to bottom right,
    rgba(236, 200, 200, 0.3) 0%,
    rgba(0, 0, 0, 0.3) 44%,
    rgba(255, 255, 255, 0.05) 100%
  );

`;

const RightRow = styled.div`
   @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
   }
`;

const HeadingSecondRow = styled.h3`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const DescriptionSecondRow = styled.p`
  font-size: 1.15rem;
  font-weight: ${WEIGHTS.normal};
  max-width: 400px;
`;

export default UseCasesSection;
