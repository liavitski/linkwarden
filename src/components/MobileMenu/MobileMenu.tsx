import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import styled, { keyframes } from 'styled-components';
import { NAV_LINKS, WEIGHTS } from '@/utils/constants';
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
                <VisuallyHidden>Close menu</VisuallyHidden>
              </CloseButton>
              <Filler />
              <LinksWrapper>
                {NAV_LINKS.map(({ slug, label, href }) => (
                  <Link href={href} key={slug} onClick={onDismiss}>
                    {label}
                  </Link>
                ))}
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

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
  `;

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.04);
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
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: ${WEIGHTS.normal};
    font-size: 1.5rem;
    padding: 8px 16px;
    border-radius: 32px;
    transition: color 200ms ease-out;

    &:hover {
      color: var(--text-color);
      transition: color 400ms ease-in;
    }

    &:focus {
      outline-color: var(--color-button-ghost-border);
      color: var(--text-color);
      transition: color 400ms ease-in;
    }
  }
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
