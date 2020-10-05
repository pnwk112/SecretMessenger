import types from './types';

const setLogin = login => ({
   type: types.SET_USER, login
})
const setRole = role => ({
   type: types.SET_ROLE, role
})


export default {setLogin, setRole}