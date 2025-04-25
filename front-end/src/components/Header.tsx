import styled from "styled-components";

export default function Header() {
    return (
        <HeaderStyle>
            <h1>My App</h1>
            <NavContainer>
                <NavButton href="/">Home</NavButton>
                <NavButton href="/about">About</NavButton>
                <NavButton href="/contact">Contact</NavButton>
            </NavContainer>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #6200ea;
    color: white;
    padding: 12px 24px;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const NavContainer = styled.nav`
    display: flex;
    gap: 1rem;
    margin-right: 2rem;
`;

const NavButton = styled.a`
    padding: 8px 16px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    text-decoration: none;
    color: white;
    font-weight: 500;
    cursor: pointer;
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transform: translateY(-1px);
    }
    
    &:active {
        transform: translateY(0);
    }
`;