import types from './types';

const setRoute = status => ({
   type: types.SET_ROUTE, status
})

// const setRoute = status => {
//    console.log(status)
//    return{
//       type: types.SET_ROUTE, status
//    }
   
// }


export default {setRoute}