import styled from "styled-components";
import { BotaoBonito } from "../styles/ButtonStyles";
import { FormContainer, Formulario } from "../styles/FormStyles";
import { InputBonito } from "../styles/InputStyles";
import { Title } from "../styles/TextsStyle";

export default function FormCadastro() {
    return (
        <>
            <FormContainer>
                <Formulario>
                    <Title>Cadastro:</Title>
                    <InputBonito type="text" placeholder='Digite seu Nome' />
                    <InputBonito type="email" placeholder='Digite seu Email' />
                    <InputBonito type="password" placeholder='Digite seu Senha' />
                    <BotaoBonito>Cadastrar</BotaoBonito>
                    <BotaoBonito>
                        <Voltar href='/login'>Voltar</Voltar>
                    </BotaoBonito>
                </Formulario>

            </FormContainer>
        </>
    )
}

const Voltar = styled.a`
    text-decoration: none;
    color: white;
    font-weight: bold;
`