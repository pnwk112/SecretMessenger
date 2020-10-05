import types from './types';

const setToken = token => ({
    type: types.SET_TOKEN, token
})
const expireToken = () => ({
    type: types.TOKEN_EXPIRED
})

const setTokenValid = () => ({
    type: types.TOKEN_VALID
})

const setTokenNotValid = () => ({
    type: types.TOKEN_NOT_VALID
})

export default {
    setToken,
    expireToken,
    setTokenValid,
    setTokenNotValid
}