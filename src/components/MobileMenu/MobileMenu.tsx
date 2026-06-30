import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';
import VisuallyHidden from '../VisuallyHidden';
import Link from 'next/link';
import { WEIGHTS } from '@/utils/constants';
import Button from '../Button';
import { X } from 'react-feather';
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
          <VisuallyHidden>
            <Dialog.Title>Mobile navigation</Dialog.Title>
            <Dialog.Description>Mobile navigation</Dialog.Description>
          </VisuallyHidden>

          <Navigation>
            <CloseButton onClick={onDismiss}>
              <X size={32}/>
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
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: hsl(220deg 5% 40% / 0.8);
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: var(--color-background);
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
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
      background-color: var(--color-link-hover);
      color: var(--text-color);
    }

    &:focus {
      outline-color: white;
      background-color: var(--color-link-hover);
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
  top: 24px;
  right: 8px;
  padding: 16px;
  border-radius: 8px;

  &:hover {
    background-color: var(--color-link-hover);
  }

  &:focus {
    outline-color: white;
    background-color: var(--color-link-hover);
  }
`;

export default MobileMenu;
