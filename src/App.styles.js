import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: 10% 90%;
  grid-template-areas:
    'nav nav nav'
    'details map list';
  width: 100%;
`;
