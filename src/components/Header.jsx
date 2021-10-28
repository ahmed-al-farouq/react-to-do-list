import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 6rem;
  font-weight: 600;
  margin-bottom: 2rem;
  line-height: 1em;
  color: #ececec;
  text-align: center;
`;

function Header() {
  return (
    <Heading>
      To do list
    </Heading>
  );
}

export default Header;
