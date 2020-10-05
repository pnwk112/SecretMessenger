import types from './types'

const userData = {
    login: null,
    role: null
  }
  

  function userDataReducer(state = userData, action){
    // console.log(action.login)
    switch(action.type){
      case types.SET_USER:
          return{
            ...state, login: action.login
          }
      case types.LOGOUT:
        return{
          ...state, login: null
        }
      case types.SET_ROLE:
        return state.role === null ? {...state, role: action.role} : state
      default:
          return state
    }
  }

  export default userDataReducer