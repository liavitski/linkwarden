'use client';

import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';
import { QUERIES, WEIGHTS, NAV_LINKS } from '@/utils/constants';
import { Menu } from 'react-feather';
import Image from 'next/image';
import Logo from '../Logo';
import Link from 'next/link';
import Button from '../Button';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';
import MobileMenu from '../MobileMenu';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [hoveredNavItem, setHoveredNavItem] = React.useState<
    string | null
  >(null);

  const id = React.useId();

  return (
    <Wrapper>
      {/* <Logo /> */}
      <Image
        src="/docs/logo.svg"
        alt="Logo"
        width={120}
        height={40}
        priority
      />
      <DesktopView>
        <Filler />
        <Navigation
          onMouseLeave={() => setHoveredNavItem(null)}
          aria-label="Main navigation"
        >
          <UnorderedList>
            {NAV_LINKS.map(({ slug, label, href }) => {
              return (
                <li
                  key={slug}
                  style={{
                    zIndex: hoveredNavItem === slug ? 1 : 2,
                  }}
                >
                  {hoveredNavItem === slug && (
                    <AnimatedBorder
                      layoutId={id}
                      transition={{
                        type: 'spring',
                        stiffness: 490,
                        damping: 60,
                        duration: 0.25,
                      }}
                    />
                  )}

                  <Link
                    href={href}
                    onMouseEnter={() => setHoveredNavItem(slug)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </UnorderedList>
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

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileView = styled.div`
  display: none;
  width: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
  }
`;

const Navigation = styled.nav`
  a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: ${WEIGHTS.normal};
    font-size: 1.5rem;
    padding: 8px 16px;
    border-radius: 32px;

    &:hover {
      color: var(--text-color);
    }

    &:focus {
      outline-color: var(--color-button-ghost-border);
      color: var(--text-color);
    }
  }
`;

const UnorderedList = styled.ul`
  display: flex;
  gap: 8px;
  list-style-type: none;
  padding: 0;

  li {
    position: relative;
  }
`;

const AnimatedBorder = styled(motion.div)`
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 2px;

  background: linear-gradient(
    90deg,
    transparent 0%,
    currentColor 20%,
    currentColor 80%,
    transparent 100%
  );
`;

const Filler = styled.div`
  flex: 1;
`;

const HamburgerButton = styled(UnstyledButton)`
  padding: 16px;
  border-radius: 8px;
  flex-shrink: 0;

  &:focus {
    outline-color: white;
  }
`;

export default Header;
