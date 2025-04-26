import NavBar from "../components/Header";
import { ButtonContainer, HeroSection, HeroSubtitle, HeroTitle, MainContainer, PrimaryButton, SecondaryButton } from "./Home";

export default function HomePerfil() {
    return (
        <>
            <NavBar />
            <MainContainer>
                <HeroSection>
                    <HeroTitle>Bem-vindo à StreamPlus</HeroTitle>
                    <HeroSubtitle>O melhor conteúdo de streaming em um só lugar</HeroSubtitle>
                    <ButtonContainer>
                        <PrimaryButton >
                            Ver Planos
                        </PrimaryButton>
                        <SecondaryButton>Saiba Mais</SecondaryButton>
                    </ButtonContainer>
                </HeroSection>
            </MainContainer>
        </>
    )
}