function profiles(state= {}, action){
  switch(action.type){
    case 'ADD_DATA':
      return {...state,
        [action.payload.email] : action.payload
      };
    default:
      return state;
  }
}

export default profiles;
