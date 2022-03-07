import styled from 'styled-components';

export const MapContainer = styled.div`
  grid-area: map;
  height: 85vh;
  display: block;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-areas: 'details' 'map' 'list';
  padding-block: 2rem;
  width: min(95%, 70rem);
  margin-inline: auto;
`;

export const GridItem = styled.div`
  &:nth-child(1) {
    grid-area: details;
  }
  &:nth-child(2) {
    grid-area: map;
  }
  &:nth-child(3) {
    grid-area: list;
  }
`;
