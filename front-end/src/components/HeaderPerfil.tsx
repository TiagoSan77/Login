// src/components/NavBarPerfil.tsx
import styled from 'styled-components';
import { FaShoppingCart, FaHome, FaUserCircle, FaSignOutAlt, FaTags } from 'react-icons/fa';

export default function NavBarPerfil() {
  return (

    <NavbarContainer>
      <Logo href="/">Stream<span>Plus</span></Logo>

      <NavLinks>
        <NavItem href="/perfil">
          <FaHome /> Início
        </NavItem>

        <NavItem href="#">
          <FaTags /> Planos
        </NavItem>

        <NavItem href="/comprar">
          <FaShoppingCart /> Comprar
        </NavItem>

        <NavItem href="/perfil/user">
          <FaUserCircle /> Perfil
        </NavItem>
      </NavLinks>

      <LogoutButton href="/">
        <FaSignOutAlt /> Sair
      </LogoutButton>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  background: #0f172a;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #00c6ff;
  text-decoration: none;

  span {
    color: #ffffff;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s;

  &:hover {
    color: #00c6ff;
  }
`;

const LogoutButton = styled.a`
  color: #ff6b6b;
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s;
  font-weight: bold;

  &:hover {
    color: #ff4d4d;
  }
`;
