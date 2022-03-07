import styled from 'styled-components';

export const Appbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 9vh;
  padding: 0 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  grid-area: nav;
  /* box-shadow: ${({ isTop }) =>
    isTop ? '0' : '0 4px 16px rgba(0, 0, 0, 0.07)'};
  z-index: 1;
  opacity: ${({ scrollDown }) => (scrollDown ? '0' : '1')};
  transition: all 0.3s ease-out; */

  @media screen and (max-width: 768px) {
    padding: 0 1em;
  }
`;

export const Title = styled.h3`
  color: #275553;
`;

export const SearchBar = styled.div`
  background-color: #eef7f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  border-radius: 0.5em;

  &:hover {
    background-color: #fff;
  }
`;

export const Input = styled.input`
  min-width: 25vw;
  min-height: 25px;
  background-color: inherit;
  padding-left: 1em;
  border: 0;

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  min-height: 32px;
  min-width: 32px;

  svg {
    fill: #366d6f;
  }

  &:hover {
    background-color: rgba(54, 109, 111, 0.1);
  }
`;
