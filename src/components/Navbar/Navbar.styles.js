import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  background: #275553;
  box-shadow: ${({ isTop }) =>
    isTop ? '0' : '0 4px 16px rgba(0, 0, 0, 0.07)'};
  z-index: 1;
  opacity: ${({ scrollDown }) => (scrollDown ? '0' : '1')};
  transition: all 0.3s ease-out;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const MenuLink = styled.a`
  margin: 0.5rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-out;

  &:hover {
    color: #14919b;
    border-bottom: 2px solid #14919b;
  }
`;

export const Burger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  color: #fff;
  text-decoration: none;
`;
