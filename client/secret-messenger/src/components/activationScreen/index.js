import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import * as api from '../../helpers/api'
import * as constans from '../../helpers/constans'

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
    min-width: 450px;
    max-width: 720px;
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
    cursor: pointer;
`


const ActivationScreen = (props) => {
    const [status, setStatus] = useState()

    useEffect(() => {
        try{
            if(api.parseQueryParam(props.location.search).length < 1){
                //Id missing 
            }else{
                api.get(constans.activateURL()+api.parseQueryParam(props.location.search)[0].id)
                .then(json =>  {
                    setStatus(true)
                    console.log(json)
                })
                .catch(error => {
                    setStatus(false)
                    throw 'Could not activate account. Check email'
                    console.log('error in request: ' + error);
                })
            }
        } catch (err){
            console.log(err)
        }
    },[])



    // console.log(props.location.search)
    console.log(api.parseQueryParam(props.location.search))
    const history = useHistory()
    const backToLogin = () => {
        history.push("/login");
    }
    return (
        // <Container style={{width: '100%', height: '100%'}}>
        <Container>
            {/* <Header>Teraz musisz aktywować swoje konto!</Header> */}
            <ConfirmArea>
                <NoticeArea>
                    <Info>
                    {status ? 'Konto zostało pomyślnie aktywowane.' : 'Wystąpił problem podczas aktywacji konta.'}
                    </Info>
                    <ButtonContainer>
                        <ButtonWrapper>
                            <Button onClick={backToLogin}>
                                Wróć na stronę logowania
                            </Button>
                        </ButtonWrapper>
                    </ButtonContainer>
                </NoticeArea>
            </ConfirmArea>
        </Container>
    )
}



export default ActivationScreen