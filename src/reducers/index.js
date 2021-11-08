const initState = {
    user: {
      "email": "",
      "token": ""
    },
    active_users: [],
  }
  
  const reducer = (state=initState, action) => {
    switch(action.type) {
        case 'INIT_ACTIVE_USERS':
          return {
              ...state,
              active_users: action.payload
          }
        case 'INIT_USER':
          return {
            ...state, 
            user: action.payload,
          }
        case 'CLEAR_USER':
          return {
            ...state,
            user: action.payload
          }
        default:
            return state;
    }
  }
  
  export default reducer ;