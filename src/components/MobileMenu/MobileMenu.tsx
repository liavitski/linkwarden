import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import styled, { keyframes } from 'styled-components';
import { WEIGHTS } from '@/utils/constants';
import { X } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import Link from 'next/link';
import Button from '../Button';
import UnstyledButton from '../UnstyledButton';

type MobileMenuProps = {
  isOpen: boolean;
  onDismiss: () => void;
};

function MobileMenu({ isOpen, onDismiss }: MobileMenuProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <InnerWrapper>
            <VisuallyHidden>
              <Dialog.Title>Mobile navigation</Dialog.Title>
              <Dialog.Description>
                Mobile navigation
              </Dialog.Description>
            </VisuallyHidden>

            <Navigation>
              <CloseButton onClick={onDismiss}>
                <X size={32} />
              </CloseButton>
              <Filler />
              <LinksWrapper>
                <Link href="">Features</Link>
                <Link href="">Pricing</Link>
                <Link href="">FAQs</Link>
                <Link href="">Docs</Link>
                <Link href="">Blog</Link>
              </LinksWrapper>
              <Filler />
              <Button variant="ghost" size="large">
                Login
              </Button>
              <Filler />
            </Navigation>
          </InnerWrapper>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: hsl(220deg 5% 40% / 0.8);
  animation: ${fadeIn} 500ms;
`;

const Content = styled(Dialog.Content)`
  --overfill: 16px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: var(--color-background);
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  width: calc(300px + var(--overfill));
  margin-right: calc(var(--overfill) * -1);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 500ms both cubic-bezier(0, 0.6, 0.32, 1.06);
    animation-delay: 200ms;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${fadeIn} 600ms both;
  animation-delay: 400ms;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 100%;

  button {
    align-self: center;
  }

  a {
    color: var(--color-text-secondary);
    font-weight: ${WEIGHTS.normal};
    font-size: 1.5rem;
    text-decoration: none;
    width: fit-content;
    padding: 8px 16px;
    border-radius: 8px;

    &:hover {
      color: var(--text-color);
    }

    &:focus {
      outline-color: white;
      color: var(--text-color);
    }
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Filler = styled.div`
  flex: 1;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 22px;
  right: 26px;
  padding: 16px;
  border-radius: 8px;

  &:focus {
    outline-color: var(--color-button-ghost-border);
  }
`;

export default MobileMenu;
