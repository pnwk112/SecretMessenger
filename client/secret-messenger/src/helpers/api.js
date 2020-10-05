import Cookies from 'universal-cookie';
import {connect, useSelector, useDispatch, Provider} from 'react-redux';
import tokenActions from '../app/token/duck/actions'

import store from '../store'
import * as constans from '../helpers/constans'
import {useHistory} from 'react-router-dom'
import { userDataActions } from '../app/userData/duck';


String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

export const getDateFromSQL = (date) => {
    const _data = date.split('-');
    if(_data.length != 3){
        throw new Error('Błąd konwersji daty postgresql')
    }else{
        const _date = new Date();
        _date.setFullYear(parseInt(_data[2]),parseInt(_data[1]),parseInt(_data[0]));
        return _date
    }
}

export const get = url =>
  new Promise(
    (resolve, reject) => {
        let h = new Headers();
        h.append('Token', store.getState().tokens.token)
      fetch(url,{
        headers: h
      })
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
    }
  )


    const apiCall = (url,method,body, resolve, reject) => {
        let h = new Headers();
        h.append('Token', store.getState().tokens.token)
        h.append('Access-Control-Allow-Origin', "*")
        h.append('Content-Type', "application/json")
        return fetch(url, {
            headers: h,
            // headers: {
            //     'Authorization': body.token,
            //     'Access-Control-Allow-Origin':'*',
            //     'Content-Type': 'application/json'
            // },
            // withCredentials: true,
            // credentials: 'include',
            mode: 'cors',
            method: method,
            body: JSON.stringify(body)
        }).then(response => {
            // console.log(response);
            if(response.ok){
                response.json().then(json => resolve(json))
            }else{
                reject(response.status)
            }
        })
    }
   

        export const post = (url, body) =>{
           return new Promise(
                (resolve, reject) => apiCall(url, 'POST', body, resolve, reject)
            )
        // return apiCall(url, 'POST', body)
        }


    export const destroy = (url) =>
        new Promise(
            (resolve, reject) => {
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": 'application/json; charset=utf-8'
                    }
                }).then(response => {
                    if(response.ok){
                        resolve(response)
                    }else{
                        reject(response)
                    }
                })
            }
        )
    

    export const put = (url, body) =>
        new Promise(
            (resolve, reject) => apiCall(url, 'PUT', body, resolve, reject)
        )


    export const checkUserToken = () => new Promise((resolve, reject) => {
        const history = useHistory()
        const dispatch = useDispatch()
        const cookies = new Cookies();
        let _token = store.getState().tokens.token
        if(!_token){
            _token = cookies.get('prjAccesToken');
    
        }
        post(constans.tokenURL(),{ token: _token})
        .then(json =>  {
            console.log(json)
            dispatch(tokenActions.setToken(_token))
            dispatch(tokenActions.setTokenValid())
            dispatch(userDataActions.setRole(json.role))
            dispatch(userDataActions.setLogin(json.email))
            resolve(true);

        })
        .catch(error => {
            dispatch(tokenActions.setToken(null))
            dispatch(tokenActions.setTokenNotValid())
            history.push("/login");
            resolve(false);

        })
    });



    export const randomString = (length) =>{
        var result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    export const checkAccess = (accessDefinition,accesslevel) => {
        return accessDefinition.includes(accesslevel);
    }

    export const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    export const validateNumbers = (str) => {
        const re = /^\d+$/;
        return re.test(String(str).toLowerCase());
    }
    export const validatePhone = (str) => {
        const re = /^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/;
        return re.test(String(str).toLowerCase());
    }
    export const validatePostalCode = (str) => {
        const re = /\d{2}-\d{3}/;
        return re.test(String(str).toLowerCase());
    }
    export const validateText= (str) => {
        return str.length > 1;
    }
    export const parseQueryParam = (queryStr) => {
        if(queryStr[0] === '?'){
            let params = [];
            let _data = queryStr.slice(1).split('&')
            _data.forEach((d) => {
                params.push({
                    [d.split('=')[0]]: d.split('=')[1]
                })
            })
            return params
        }
    }


            
    