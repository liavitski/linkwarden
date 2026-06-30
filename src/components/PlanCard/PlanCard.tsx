import * as React from 'react';
import styled, { css } from 'styled-components';
import { QUERIES, WEIGHTS } from '@/utils/constants';

export type Variant = 'self-hosted' | 'cloud' | 'enterprise';
export type PlanType = 'monthly' | 'yearly';

type PlanCardProps = {
  subtitle: string;
  features: string[];
  variant: Variant;
  planType: PlanType;
  gridArea: string;
};

function PlanCard({
  subtitle,
  features,
  variant,
  planType,
  gridArea,
}: PlanCardProps) {
  const titles = {
    'self-hosted': 'Free',
    cloud: planType === 'monthly' ? '$3' : '$27',
    enterprise: 'Custom',
  };

  const type = planType === 'monthly' ? 'month' : 'year';

  return (
    <Card $variant={variant} $gridArea={gridArea}>
      <Subtitle>{subtitle}</Subtitle>
      <Wrapper>
        <Title>
          {titles[variant]}
          {variant === 'cloud' && <span>/{type}</span>}
        </Title>
      </Wrapper>

      <ActionButton $variant={variant}>Get Started Now</ActionButton>

      <FeatureList>
        {features.map((f) => (
          <FeatureItem key={f}>{f}</FeatureItem>
        ))}
      </FeatureList>
      {variant === 'cloud' && (
        <TrialParagraph>
          14-day free trial, cancel anytime.
        </TrialParagraph>
      )}
    </Card>
  );
}

const Card = styled.div<{ $variant: Variant; $gridArea: string }>`
  border-radius: 12px;
  padding: 16px;
  background: transparent;
  border: 1px solid var(--color-button-ghost-border);

  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  grid-area: ${({ $gridArea }) => $gridArea};

  width: 100%;
  max-width: 482px;

  margin: 0 auto; /* THIS is the key */

  ${({ $variant }) =>
    $variant === 'cloud' &&
    css`
      width: 100%;
      max-width: 566px;
      justify-self: center;
      height: 969px;

      background: linear-gradient(
        100deg,
        rgba(236, 200, 200, 0.1) 0%,
        rgba(0, 0, 0, 0.85) 44%,
        rgba(255, 255, 255, 0.03) 100%
      );
      box-shadow: 0 10px 30px rgba(42, 42, 42, 0.6);
    `}
  ${({ $variant }) =>
    $variant !== 'cloud' &&
    css`
      border: 1px solid var(--color-button-ghost-border-darker);
    `}

    @media ${QUERIES.phoneAndSmaller} {
    padding: 8px;
    height: auto;
    padding: 16px 0;
  }
`;

const Subtitle = styled.span`
  font-size: 2rem;
  font-weight: ${WEIGHTS.normal};
  color: var(--color-plan-subheading);
  line-height: 1;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1rem;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: 4rem;
  font-weight: ${WEIGHTS.normal};
  line-height: 1;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 2rem;
  }

  span {
    color: var(--color-button-ghost-border);
  }
`;

const ActionButton = styled.button<{ $variant: Variant }>`
  position: relative;
  background: transparent;
  font-size: 1.125rem;
  color: inherit;
  padding: 16px 60px;
  border-radius: 32px;
  font-weight: bold;
  border: 2px solid var(--color-button-ghost-border);
  margin-bottom: 32px;
  z-index: 1;
  cursor: pointer;
  background: linear-gradient(
    100deg,
    rgba(69, 27, 143, 0.25) 0%,
    rgba(0, 0, 0, 0.85) 56%,
    rgba(69, 27, 143, 0.15) 100%
  );

  box-shadow: 0 10px 30px rgba(69, 27, 143, 0.25);

  ${({ $variant }) =>
    $variant === 'cloud' &&
    css`
      background: linear-gradient(
        to top right,
        #3a00a1 0%,
        #9763f4 100%
      );
    `}

  &:hover {
    color: var(--color-text-hover);
  }
`;

const FeatureList = styled.ul`
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 1rem;
`;

const TrialParagraph = styled.p`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1rem;
  }
`;

const FeatureItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};

  &::before {
    content: '';
    width: 22px;
    height: 22px;
    margin-right: 8px;
    background: url('/docs/tick.svg') no-repeat center;
    background-size: contain;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1rem;
  }
`;

export default PlanCard;
