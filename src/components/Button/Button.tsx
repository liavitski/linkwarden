import { WEIGHTS } from '@/utils/constants';
import React from 'react';
import styled from 'styled-components';

type SizeConfig = React.CSSProperties & {
  '--borderRadius': string;
  '--fontSize': string;
  '--padding': string;
};

type SizeKey = 'small' | 'medium' | 'large';

const SIZES: Record<SizeKey, SizeConfig> = {
  small: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 16 / 16 + 'rem',
    '--padding': '6px 12px',
  },
  medium: {
    '--borderRadius': 32 + 'px',
    '--fontSize': 18 / 16 + 'rem',
    '--padding': '8px 16px',
  },
  large: {
    '--borderRadius': 32 + 'px',
    '--fontSize': 24 / 16 + 'rem',
    '--padding': '10px 30px',
  },
};

type ButtonVariant = 'fill' | 'outline' | 'ghost';

type ButtonProps = {
  variant: ButtonVariant;
  size: SizeKey;
  children: React.ReactNode;
};

const Button = ({ variant, size, children }: ButtonProps) => {
  const styles = SIZES[size];
  const Component = VARIANT_BUTTONS[variant];

  return <Component style={styles}>{children}</Component>;
};

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  cursor: pointer;
  font-family: var(--font-family);
  color: var(--color-text);
  font-weight: ${WEIGHTS.medium};
  width: fit-content;

  &:focus {
    outline-color: white;
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: white;
  color: var(--color-background);

  &:hover {
    filter: brightness(90%);
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: transparent;
  color: var(--color-text);
  border: 2px solid currentColor;

  &:hover {
    background-color: rgb(255 255 255 / 8%);
  }
`;
const GhostButton = styled(ButtonBase)`
  color: white;
  background-color: transparent;
  border: 2px solid var(--color-button-ghost-border);
  transition: filter 600ms;

  &:focus,
  &:hover {
    outline-color: white;
    color: var(--color-text-hover);
    transition: filter 250ms;
    filter: brightness(130%);
  }
`;

const VARIANT_BUTTONS = {
  fill: FillButton,
  outline: OutlineButton,
  ghost: GhostButton,
} as const;

export default Button;
