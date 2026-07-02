import * as React from 'react';
import UsersLogos from '@/components/UsersLogos';
import styled from 'styled-components';
import { QUERIES } from '@/utils/constants';

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
  margin-bottom: 22rem;
`;

const Heading = styled.h2`
  max-width: 814px;
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);

  @media ${QUERIES.phoneAndSmaller} {
    text-align: left;
  }
`;

export default CompaniesSection;
