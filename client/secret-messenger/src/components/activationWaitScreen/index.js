import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Container = styled.div`
    padding: 35px 0 28px;

`
const Header = styled.h3`
    font-size: 36px;
    padding: 28px 0;
    text-align: center;
    color: #0071ce;
`
const ConfirmArea = styled.div`
    max-width: 620px;
    margin: auto;
`
const NoticeArea = styled.div`
    background-color: #f7fcfe;
    border: 1px solid #52aed6;
    border-style: double;
    border-radius: 4px;
    padding: 10px;
`
const Info = styled.p`
    padding: 25px 30px;
    text-align: center;
    color: #000;
    line-height: 26px;
    font-size: 16px;
    font-weight: bold;
`
const ButtonContainer = styled.ul`
    padding: 28px 0;
    text-align: center;
`
const ButtonWrapper = styled.li`
    padding: 10px 0;
    color: #919191;
    list-style:none;
`
const Button = styled.a`
    font-size: 14px;
    background-color: #c82814;
    color: #fff;
    border-radius: 4px;
    background-size: contain;
    max-width: 15vw;
    align-items: center;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    display: block;
    font-weight: bold;
    padding: 15px;
`


const ActivationWaitScreen = (props) => {
    const history = useHistory()
    const backToLogin = () => {
        history.push("/login");
    }
    return (
        // <Container style={{width: '100%', height: '100%'}}>
        <Container>
            <Header>Teraz musisz aktywować swoje konto!</Header>
            <ConfirmArea>
                <NoticeArea>
                    <Info>
                    Kliknij w link, który właśnie do Ciebie przesłaliśmy. Sprawdź swoją skrzynkę emailową. Jeżeli nie możesz odnaleźć wiadomości, proszę przejrzyj folder Spam.
                    </Info>
                    <ButtonContainer>
                        <ButtonWrapper>
                            <Button onClick={backToLogin}>
                                Wróć na stronę główną
                            </Button>
                        </ButtonWrapper>
                    </ButtonContainer>
                </NoticeArea>
            </ConfirmArea>
        </Container>
    )
}



export default ActivationWaitScreen