import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import LoginScreen from './components/loginScreen'
import MainScreen from './components/mainScreen';
import SignInScreen from './components/signInScreen';
import ActivationWaitScreen from './components/activationWaitScreen';
import ActivationScreen from './components/activationScreen';
import RemindPasswordScreen from './components/remindPasswordScreen';
import styled from 'styled-components';
// import Cookies from 'universal-cookie';
// import * as api from './helpers/api';
import store from './store'


const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  // const cookies = new Cookies();
  // console.log(store.getState().tokens.isValid);
  // api.checkUserToken({token: cookies.get('prjAccesToken')}).then(data => console.log(data))
  // api.checkUserToken({token: cookies.get('prjAccesToken')});

  return (
    <Router>
    <Container>
      <Switch>
        
        <Route path='/main'  component={() => <MainScreen route={store.getState().route.current} />} />
        <Route path='/register' component={SignInScreen} />
        <Route path='/email/confirm' component={SignInScreen} />
        <Route path='/activationWait' component={ActivationWaitScreen} />
        <Route path='/activation' component={ActivationScreen} />
        <Route path='/remindPassword' component={RemindPasswordScreen} />
        <Route path='/' component={LoginScreen} />
        
        
      </Switch>
    </Container>
  </Router>
  // <Container>
  //   <LoginScreen></LoginScreen>
  // </Container>
  );
}

export default App;