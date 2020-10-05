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
const LoginScreen = () => {
    const history = useHistory()
    const loginInputRef = useRef();
    const passInputRef = useRef();
    const dispatch = useDispatch()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    
        // const token = useSelector(state => state.token)
        // const login = useSelector(state => state.login)
    
        // console.log(token);
        const updateLogin = (event) => {
            console.log(event.target.value);
            dispatch(userDataActions.setLogin(event.target.value))
        }
        const updatePassword = (event) => {
            // setPassword(sha256(event.target.value).toString())

            setPassword(event.target.value)
    
        }
        const _login = () => {
            const cookies = new Cookies();
    
            // dispatch(userDataActions.setLogin(loginInputRef.current.value))
            // dispatch(routeActions.setRoute(5))
            // console.log(loginInputRef.current.value);
            // console.log(sha256(passInputRef.current.value).toString());
            history.push("/register");
            // api.post(constans.loginURL(),{ email: loginInputRef.current.value,password: sha256(passInputRef.current.value).toString()})
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
              <TitleContainer><CenterText style={{marginLeft: '12%', height: '100%'}}>LOGOWANIE</CenterText></TitleContainer>
              <TextField fullWidth={'true'} id="standard-basic2" inputRef={loginInputRef} label="Login" style={{margin: '15px auto', width: '66%', display: 'block'}}/>
              <TextField fullWidth={'true'} id="standard-basic" inputRef={passInputRef} label="Hasło" style={{margin: '15px auto', width: '66%', display: 'block'}}/>
              <LoginButton variant="outlined" style={{border: '1px solid #32B4E6', width: '40%', display: 'block', color: '#32B4E6'}} onClick={_login}>Zaloguj</LoginButton>
              <CenterText onClick={() => {history.push("/remindPassword")}} style={{margin: '30px auto 5px auto', display: 'block', width: 'fit-content',fontSize: '0.8rem', color: 'rgba(200,200,200,1)', cursor: 'pointer'}}>Nie pamiętasz hasła?</CenterText>
              <CenterText onClick={() => {history.push("/register")}} style={{margin: '0 auto', display: 'block', width: 'fit-content',fontSize: '0.8rem', color: 'rgba(200,200,200,1)', cursor: 'pointer'}}>Nie masz konta? Załóż je.</CenterText>
            </Container>
            <Logo style={{fill: 'white', position: 'absolute', height: '80px', top: '30px'}}/>
      </React.Fragment>

     );
} 
    export default LoginScreen;
    // export default withRouter(LoginScreen);