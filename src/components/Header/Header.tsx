'use client';

import * as React from 'react';
import styled from 'styled-components';
import { WEIGHTS } from '@/utils/constants';
import { Menu } from 'react-feather';
import Logo from '../Logo';
import Link from 'next/link';
import Button from '../Button';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';
import MobileMenu from '../MobileMenu';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <Wrapper>
      <Logo />
      <DesktopView>
        <Filler />
        <Navigation>
          <Link href="">Features</Link>
          <Link href="">Pricing</Link>
          <Link href="">FAQs</Link>
          <Link href="">Docs</Link>
          <Link href="">Blog</Link>
        </Navigation>
        <Filler />
        <Button variant="ghost" size="large">
          Login
        </Button>
      </DesktopView>

      <MobileView>
        <Filler />
        <HamburgerButton onClick={() => setShowMobileMenu(true)}>
          <Menu size={32} />
          <VisuallyHidden>Open menu</VisuallyHidden>
        </HamburgerButton>
        {showMobileMenu && (
          <MobileMenu
            isOpen={showMobileMenu}
            onDismiss={() => setShowMobileMenu(false)}
          />
        )}
      </MobileView>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: var(--header-height);
  max-width: 1290px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
`;

const DesktopView = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 880px) {
    display: none;
  }
`;

const MobileView = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 880px) {
    display: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 8px;

  a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: ${WEIGHTS.normal};
    font-size: 1.5rem;
    padding: 8px 16px;
    border-radius: 32px;

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

const Filler = styled.div`
  flex: 1;
`;

const HamburgerButton = styled(UnstyledButton)`
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

export default Header;
