import types from './types'

const tokenData = {
    token: null,
    isValid: false
  }

const tokenReducer = (state = tokenData, action) => {
    switch (action.type){
      case types.SET_TOKEN: 
        return{
          ...state, token: action.token
        }
      case types.TOKEN_EXPIRED:
        return {
          ...state, token: null
        }
      case types.TOKEN_VALID:
        return {
          ...state, isValid: true
        }
      case types.TOKEN_NOT_VALID:
        return {
          ...state, isValid: false
        }
      default: 
        return state
    }
  }

  export default tokenReducer