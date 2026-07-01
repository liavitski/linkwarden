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

type ButtonProps = {
  variant: string;
  size: SizeKey;
  children: React.ReactNode;
};

const Button = ({ variant, size, children }: ButtonProps) => {
  const styles = SIZES[size];

  let Component;
  if (variant === 'fill') {
    Component = FillButton;
  } else if (variant === 'outline') {
    Component = OutlineButton;
  } else if (variant === 'ghost') {
    Component = GhostButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

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
  color: white;

  &:hover {
    background-color: white;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: white;
  border: 2px solid currentColor;

  &:hover {
    background-color: white;
  }
`;
const GhostButton = styled(ButtonBase)`
  color: white;
  background-color: transparent;
  border: 2px solid var(--color-button-ghost-border);

  &:focus {
    outline-color: white;
  }

  &:hover {
    color: var(--color-text-hover);
  }
`;

export default Button;
