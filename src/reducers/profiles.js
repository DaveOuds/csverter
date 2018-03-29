function profiles(state= {}, action){
  switch(action.type){
    case 'ADD_DATA':
      return {...state,
        [action.payload.email] : action.payload
      };
      case 'ADD_NOTE':
        return {
          ...state,
          [action.profile.email]: action.profile
        }
      case 'REMOVE_NOTE':
          return {
            ...state,
            [action.profile.email]: action.profile
          }
    default:
      return state;
  }
}

export default profiles;
