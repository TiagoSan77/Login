import FormLogin from "../components/FormLogin";
import styled from 'styled-components';

export default function Login() {
    return (
        <>
            <LoginContainer>
                <FormLogin />
            </LoginContainer>
        </>
    )
}


const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;