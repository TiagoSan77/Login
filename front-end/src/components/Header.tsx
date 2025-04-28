import { FaEnvelope, FaShoppingCart, FaSignInAlt, FaTags, FaUserPlus } from 'react-icons/fa';
import styled from 'styled-components';

export default function NavBar() {
  return (
    <NavbarContainer>
    <Logo href="/">Stream<span>Plus</span></Logo>

    <NavLinks>
      <NavItem href="#">
        <FaTags /> Planos
      </NavItem>

      <NavItem href="#">
        <FaEnvelope /> Contato
      </NavItem>

      <NavItem href="/comprar">
        <FaShoppingCart /> Comprar
      </NavItem>

      <NavItem href="/login">
        <FaSignInAlt /> Login
      </NavItem>

      <RegisterButton href="/register">
        <FaUserPlus /> Cadastre-se
      </RegisterButton>
    </NavLinks>
  </NavbarContainer>
);
}

// Styled-components

const NavbarContainer = styled.nav`
background: #0f172a;
padding: 1rem 2rem;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
flex-wrap: wrap;
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
align-items: center;

@media (max-width: 768px) {
  width: 100%;
  justify-content: center;
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 1.2rem;
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

const RegisterButton = styled.a`
background-color: #00c6ff;
color: #0f172a;
font-weight: bold;
text-decoration: none;
padding: 0.5rem 1rem;
border-radius: 25px;
font-size: 1.1rem;
display: flex;
align-items: center;
gap: 0.5rem;
transition: background 0.3s, color 0.3s;

&:hover {
  background-color: #00a3cc;
  color: white;
}
`;