import { WEIGHTS } from '@/utils/constants';
import * as React from 'react';
import styled from 'styled-components';

type CtaButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

function CtaButton({ children, className, href }: CtaButtonProps) {
  if (href) {
    return (
      <Btn as="a" href={href} className={className}>
        {children}
      </Btn>
    );
  }

  return <Btn className={className}>{children}</Btn>;
}

const Btn = styled.button`
  margin: 0;
  padding: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  text-decoration: none;
  width: 327px;
  height: 74px;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${WEIGHTS.medium};
  font-size: 1.5rem;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.317);

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export default CtaButton;
