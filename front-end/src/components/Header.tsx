import styled from 'styled-components';

export default function NavBar() {
  return (
    <NavbarContainer>
      <Logo>StreamPlus</Logo>
      <NavLinks>
        <li>Início</li>
        <li>Planos</li>
        <li>Contato</li>
        <li>Comprar</li>
        <li>
          <a href="/login" style={{ color:'white', textDecoration: 'none' }}>Login</a>
        </li>
        <li>
          <a href='/register' style={{ color:'white', textDecoration: 'none' }}>
            Cadastre-se
          </a>
        </li>
      </NavLinks>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  background: linear-gradient(90deg, #141e30, #243b55);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  li {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #00c6ff;
    }
  }
`;
