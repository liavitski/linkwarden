import { WEIGHTS } from '@/utils/constants';
import * as React from 'react';
import styled from 'styled-components';

function CtaButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <Btn className={className}>{children}</Btn>;
}

const Btn = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  font: inherit;
  color: inherit;
  width: 327px;
  height: 74px;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${WEIGHTS.medium};
  font-size: 1.5rem;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export default CtaButton;
