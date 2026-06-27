'use client';
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  GiphyLogo,
  ArtsyLogo,
  CoinbaseLogo,
  Auth0Logo,
  TicketmasterLogo,
  VolkswagenLogo,
  VogueLogo,
  VimeoLogo,
  ShpockLogo,
  UnderArmourLogo,
  SpotifyLogo,
  PricelineLogo,
  TaskadeLogo,
  IMDbLogo,
  RedBullLogo,
  WarnerBrosLogo,
  LatamLogo,
  SixtLogo,
} from '@/utils/CompanyLogos';

const logos = [
  GiphyLogo,
  ArtsyLogo,
  CoinbaseLogo,
  Auth0Logo,
  TicketmasterLogo,
  VolkswagenLogo,
  VogueLogo,
  VimeoLogo,
  ShpockLogo,
  UnderArmourLogo,
  SpotifyLogo,
  PricelineLogo,
  TaskadeLogo,
  IMDbLogo,
  RedBullLogo,
  WarnerBrosLogo,
  LatamLogo,
  SixtLogo,
];

const doubled = [...logos, ...logos];

const slideAnimation = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 1600px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 120px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      to right,
      #0f1115 0%,
      transparent 100%
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      to left,
      #0f1115 0%,
      transparent 100%
    );
  }
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${slideAnimation} 80s linear infinite;

`;

const Logo = styled.div`
  height: 60px;
  margin-right: 40px;
  flex-shrink: 0;

  svg {
    fill: currentColor;
    stroke: currentColor;
  }
`;

function UsersLogos() {
  React.useEffect(() => {}, []);

  return (
    <Wrapper>
      <Track>
        {doubled.map((LogoComp, i) => (
          <Logo key={i}>
            <LogoComp />
          </Logo>
        ))}
      </Track>
    </Wrapper>
  );
}

export default UsersLogos;
