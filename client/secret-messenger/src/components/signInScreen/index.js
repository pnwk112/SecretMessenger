import React, { useState, useRef } from 'react';
import {useDispatch} from 'react-redux';
import TextField from '../inputs/textField';
// import TextField from '@material-ui/core/TextField';
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
  position: relative;
  overflow: auto;
  /* margin: 32.5vh auto; */
  height: 48vh;
  width: 50vh;
  min-height: 400px;
  min-width: 440px;
  background: white;
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
`
const TitleContainer = styled.div`
    margin-top: 7%;
    height: 10%;
    border-left: 5px solid #32B4E6;
    margin-bottom: 2%;
`
const CenterText = styled.span`
  color: #32B4E6;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.5px;
  font-weight: bold;
`

const LoginButton = styled(Button)`
  &&{
    /* margin: 35px auto 15px auto; */
    position: absolute;
    border: 1px solid rgb(50, 180, 230);
    width: 40%;
    display: block;
    color: rgb(50, 180, 230);
    left: 30%;
    bottom: 20px;
  }
`
const CenterWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`
const TextFieldInput = styled(TextField)`
  /* &&{
    margin: 10px auto;
    display: block;
  } */
  &&&> div{
    width: 100%;
  }
`
// &:nth-child(2) {
//   width: 100%
//   }
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
const MessageContainer = styled.div`
  width:  45vh;
  height: 5vh;
  color: #fff;
  border: 1px solid red;
`

const SignInScreen = () => {
    const history = useHistory()
    const nameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const repPassRef = useRef();
    const dispatch = useDispatch()
    const [nameHelper, setNameHelper] = useState(true)
    const [lastNameHelper, setlastNameHelper] = useState(true)
    const [emailValid, setEmailValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)


        const updateLogin = (event) => {
            console.log(event.target.value);
            dispatch(userDataActions.setLogin(event.target.value))
        }
        const updatePassword = (event) => {
            // setPassword(sha256(event.target.value).toString())

            // setPassword(event.target.value)
    
        }
        const validateName = () => {
          nameRef.current.getValue().length < 3 ? nameRef.current.setHelperText("Pole musi zawierać min. 3 znaki") : nameRef.current.setHelperText("");
          return !nameRef.current.getValue().length < 3
        }
        const validateLastName = () => {
          lastNameRef.current.getValue().length < 3 ? lastNameRef.current.setHelperText("Pole musi zawierać min. 3 znaki") : lastNameRef.current.setHelperText("");
          return !lastNameRef.current.getValue().length < 3
        }
        const validatePass = () => {
          repPassRef.current.getValue() ==  passRef.current.getValue()  ? repPassRef.current.setHelperText("") : repPassRef.current.setHelperText("Hasła nie pasują do siebie")
          return repPassRef.current.getValue() ==  passRef.current.getValue()
        }
        const validateEmail = () => {
           api.validateEmail(emailRef.current.getValue()) ? emailRef.current.setHelperText("") : emailRef.current.setHelperText("Pole musi zawierać poprawny adres email");
           return api.validateEmail(emailRef.current.getValue())
        }
        const register = () => {
          if(validateName() && validateLastName() && validatePass() && validateEmail()){
            api.post(constans.signupURL(),{
               email: emailRef.current.getValue(),password: sha256(passRef.current.getValue()).toString(), name: nameRef.current.getValue(), lastName: lastNameRef.current.getValue()})
            .then(json =>  {
                history.push("/activationWait");
                console.log("Na podany adres email wysłano link aktywacyjny. Sprawdź pocztę")
                // if(json.logged){
                //     cookies.set('prjAccesToken', json.token, { path: '/' });
                //     console.log(cookies.get('prjAccesToken'));
                //     dispatch(tokenActions.setToken(json.token))
                //     dispatch(tokenActions.setTokenValid())
                //     dispatch(userDataActions.setRole(json.role))
                //     history.push("/main");
                // }
            })
            .catch(error => {
                if(error === 409){
                  emailRef.current.setHelperText("Podany adres email jest już zajęty");
                }
            })
          }
          else{
            console.log('not ready');
          }
          
          // validateLastName();
          // validatePass();
          // validateEmail();

            // api.post(constans.loginURL(),{ email: emailRef.current.value,password: sha256(passRef.current.value).toString()})
            // .then(json =>  {
            //     console.log(json)
            //     // if(json.logged){
            //     //     cookies.set('prjAccesToken', json.token, { path: '/' });
            //     //     console.log(cookies.get('prjAccesToken'));
            //     //     dispatch(tokenActions.setToken(json.token))
            //     //     dispatch(tokenActions.setTokenValid())
            //     //     dispatch(userDataActions.setRole(json.role))
            //     //     history.push("/main");
            //     // }
            // })
            // .catch(error => {
            //     console.log('error in request: ' + error);
            // })
        }
    return(
      <React.Fragment>
            <Container>
              <TitleContainer><CenterText style={{marginLeft: '12%', height: '100%'}}>REJESTRACJA</CenterText></TitleContainer>
              <TextField id="standard-basic2" ref={nameRef}  label="Imię" style={{marginLeft: '12.5%', marginRight: '5%', width: '35%'}} onBlur={validateName}/>
              <TextField id="standard-basic2" ref={lastNameRef} label="Nazwisko" style={{margin: '0px 0px', width: '35%'}} onBlur={validateLastName}/>
              <TextFieldInput id="standard-basic" ref={emailRef} label="Adres e-mail" style={{marginTop: '10px', width: '75%', display: 'block', marginLeft: '12.5%'}} onBlur={validateEmail}/>
              <TextFieldInput id="standard-basic" ref={passRef} label="Hasło" type={'password'} style={{marginTop: '10px', width: '75%', display: 'block', marginLeft: '12.5%'}}/>
              <TextFieldInput id="standard-basic" ref={repPassRef} type={'password'} label="Powtórz hasło" style={{marginTop: '10px', width: '75%', display: 'block', marginLeft: '12.5%'}} onBlur={validatePass}/>
              <LoginButton variant="outlined" style={{border: '1px solid #32B4E6', width: '40%', bottom: '65px', display: 'block', color: '#32B4E6'}} onClick={register}>ZAREJESTRUJ</LoginButton>
              <LoginButton variant="outlined" style={{border: '1px solid #32B4E6', width: '30%', left: '35%', display: 'block', color: '#32B4E6'}} onClick={() => {history.push("/login")}}>WRÓĆ</LoginButton>
              
            </Container>            
            <Logo style={{fill: 'white', position: 'absolute', height: '80px', top: '30px'}}/>
      </React.Fragment>

     );
} 

export default SignInScreen;