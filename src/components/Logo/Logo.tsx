import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

type LogoProps = {
  width?: number;
  height?: number;
};

function Logo({ width = 120, height = 40 }: LogoProps) {
  return (
    <LinkWrapper href="/" $width={width} $height={height}>
      <Image
        src="/docs/logo.svg"
        alt="Logo"
        width={width}
        height={height}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </LinkWrapper>
  );
}

const LinkWrapper = styled(Link)<{
  $width?: number;
  $height?: number;
}>`
  display: block;
  flex-shrink: 0;
  width: ${({ $width }) => ($width ? `${$width}px` : 'auto')};
  height: ${({ $height }) => ($height ? `${$height}px` : 'auto')};
  transition: filter 600ms;

  &:hover,
  &:focus {
    transition: filter 250ms;
    filter: brightness(130%);
  }
`;

export default Logo;
