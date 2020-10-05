import * as api from '../helpers/api';
import * as constans from '../helpers/constans';
import {useHistory} from 'react-router-dom'
import store from '../store'
import Cookies from 'universal-cookie';


export const checkToken = () => {
    const history = useHistory()
    const cookies = new Cookies();
    let _token = store.getState().tokens.token
    if(!_token){
        _token = cookies.get('prjAccesToken');

    }
    api.post(constans.tokenURL(),{ token: _token})
    .then(json =>  {
        console.log(json)
        // if(json.logged){
        //     cookies.set('prjAccesToken', json.token, { path: '/' });
        //     console.log(cookies.get('prjAccesToken'));
        //     dispatch(tokenActions.setToken(json.token))
        // }
    })
    .catch(error => {
        history.push("/login");
    })
}

