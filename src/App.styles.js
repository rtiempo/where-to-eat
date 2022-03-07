import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-auto-columns: 1fr;
  grid-template-rows: 9vh 91vh;
  grid-template-areas:
    'nav nav nav'
    'details map list';
  width: 100%;
`;
