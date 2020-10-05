import React, { useState, useRef } from 'react';
import {useDispatch} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import sha256 from 'crypto-js/sha256';
import Cookies from 'universal-cookie';
import tokenActions from '../../app/token/duck/actions'
import userDataActions from '../../app/userData/duck/actions'
import * as api from '../../helpers/api';
import * as constans from '../../helpers/constans'
import {useHistory} from 'react-router-dom'
import routeActions from '../../app/route/duck/actions'
import {ReactComponent as Logo} from '../../icons/title.svg';

// const Container = styled.div`
//     display: grid;
//     align-items: center;
//     justify-content: center;
//     margin-top: 200px;
//     grid-row-gap: 20px;
// `
const Container = styled.div`
  overflow: auto;
  /* margin: 32.5vh auto; */
  height: 35vh;
  width: 25vh;
  min-height: 330px;
  min-width: 240px;
  background: white;
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
`
const TitleContainer = styled.div`
  margin-top: 15%;
  height: 10%;
  border-left: 5px solid #32B4E6;
`
const CenterText = styled.span`
  color: #32B4E6;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.5px;
  font-weight: bold;
  text-align: center;
`

const LoginButton = styled(Button)`
  &&{
    margin: 35px auto 15px auto;
  }
`
const CenterWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`
const TextFieldInput = styled(TextField)`
  &&{
    margin: 10px auto;
    display: block;
  }
`
const ButtonLogin = styled(Button)`
  &&{
    display: block;
    margin: 10px auto;
  }
`
const ButtonRegister = styled(Button)`
  &&{
    font-size: 10px;
    display: block;
    margin: 10px auto;
  }
`  
const ResetPasswordScreen = () => {
    const history = useHistory()
    const loginInputRef = useRef();
    const passInputRef = useRef();
    const dispatch = useDispatch()

    const [status, setStatus] = useState()

    useEffect(() => {


    },[])

    const _reset = () => {
        api.post(constans.forgotsURL(),{email:loginInputRef.current.value})
            .then(json =>  {
                setStatus(true)
                 console.log(json)
                 console.log("json")
            })
    }
    return(
      <React.Fragment>
            <Container>
              <TitleContainer><CenterText style={{marginLeft: '12%', height: '100%'}}>RESETOWANIE HASŁA</CenterText></TitleContainer>
              <TextField id="standard-basic2" fullWidth={'true'} inputRef={loginInputRef} label="E-mail" style={{margin: '20% auto 0px', width: '66%', display: 'block'}}/>
              <CenterText style={{margin: '30px auto 5px auto', display: 'block', width: 'fit-content',fontSize: '0.8rem', color: 'rgba(200,200,200,1)', cursor: 'pointer'}}>Podaj adres e-mail używany do logowania</CenterText>
              <LoginButton variant="outlined" style={{border: '1px solid #32B4E6', width: '60%', display: 'block', color: '#32B4E6', marginTop: '20%'}} onClick={_reset}>RESETUJ HASŁO</LoginButton>
            </Container>
            <Logo style={{fill: 'white', position: 'absolute', height: '80px', top: '30px'}}/>
      </React.Fragment>

     );
} 
    export default ResetPasswordScreen;
    // export default withRouter(LoginScreen);