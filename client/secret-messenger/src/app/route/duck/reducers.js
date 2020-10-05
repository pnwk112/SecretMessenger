import types from './types'
import {content} from '../../../helpers/constans'

const route = {
    current: content.CALENDAR
  }
  

  function routeReducer(state = route, action){
    switch(action.type){
      case types.SET_ROUTE:
          return{
            ...state, current: action.status
          }
      default:
          return state
    }
  }

  export default routeReducer