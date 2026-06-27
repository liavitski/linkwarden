import * as React from 'react';
import Logo from '../Logo';
import styled from 'styled-components';
import Link from 'next/link';
import { WEIGHTS } from '@/utils/constants';
import Button from '../Button';

function Header() {
  return (
    <Wrapper>
      <Logo />
      <nav>
        <ListWrapper>
          <ListItem>
            <Link href="">Features</Link>
          </ListItem>
          <ListItem>
            <Link href="">Pricing</Link>
          </ListItem>
          <ListItem>
            <Link href="">FAQs</Link>
          </ListItem>
          <ListItem>
            <Link href="">Docs</Link>
          </ListItem>
          <ListItem>
            <Link href="">Blog</Link>
          </ListItem>
        </ListWrapper>
      </nav>
      <Button variant='ghost' size='large'>Login</Button>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: var(--header-height);
  max-width: 1290px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

const ListWrapper = styled.ul`
  display: flex;
  gap: 26px;
`;

const ListItem = styled.li`
  list-style-type: none;
  
  a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-weight: ${WEIGHTS.normal};
    font-size: 1.5rem;
  }
`;

export default Header;
