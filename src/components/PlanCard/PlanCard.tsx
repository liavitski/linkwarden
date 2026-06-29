'use client';
import { motion } from 'motion/react';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { WEIGHTS } from '@/utils/constants';

export type Variant = 'self-hosted' | 'cloud' | 'enterprise';
export type PlanType = 'monthly' | 'yearly';

type PlanCardProps = {
  subtitle: string;
  features: string[];
  variant: Variant;
  planType: PlanType;
};

function PlanCard({
  subtitle,
  features,
  variant,
  planType,
}: PlanCardProps) {
  const titles = {
    'self-hosted': 'Free',
    cloud: planType === 'monthly' ? '$3' : '$27',
    enterprise: 'Custom',
  };

  const type = planType === 'monthly' ? 'month' : 'year';

  return (
    <Card $variant={variant}>
      <Subtitle>{subtitle}</Subtitle>
      <Wrapper>
        <Title>
          {titles[variant]}
          {variant === 'cloud' && <span>/{type}</span>}
        </Title>
      </Wrapper>

      <ActionButton>Get Started Now</ActionButton>

      <FeatureList>
        {features.map((f) => (
          <FeatureItem key={f}>{f}</FeatureItem>
        ))}
      </FeatureList>
      {variant === 'cloud' && (
        <p>14-day free trial, cancel anytime.</p>
      )}
    </Card>
  );
}

const Card = styled.div<{ $variant: Variant }>`
  border-radius: 12px;
  padding: 16px;
  background: transparent;
  border: 1px solid var(--color-button-ghost-border);
  width: 482px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ $variant }) =>
    $variant === 'cloud' &&
    css`
      width: 566px;
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
`;

const Subtitle = styled.span`
  font-size: 2rem;
  font-weight: ${WEIGHTS.normal};
  color: var(--color-plan-subheading);
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: 4rem;
  font-weight: ${WEIGHTS.normal};
`;

const ActionButton = styled.button`
  margin: 12px 0;
`;

const FeatureList = styled.ul`
  margin: 0;
  padding-left: 0;
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
`;

export default PlanCard;
