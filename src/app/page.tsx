import Logo from '@/components/Logo';
import Image from 'next/image';
import styled from 'styled-components';

export default function Home() {
  return (
    <main>
      <Header>
        <Logo />
      </Header>
    </main>
  );
}

const Header = styled.header`
  color: red;
`;
