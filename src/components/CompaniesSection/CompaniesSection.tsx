import * as React from 'react';
import UsersLogos from '@/components/UsersLogos';
import styled from 'styled-components';

function CompaniesSection() {
  return (
    <Wrapper>
      <Heading>
        Loved by thousands at the world&apos;s most innovative
        companies
      </Heading>
      <UsersLogos />
    </Wrapper>
  );
}

const Wrapper = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 80px;
`;

const Heading = styled.h2`
  font-size: 3rem;
  max-width: 814px;
  text-align: center;
`;

export default CompaniesSection;
