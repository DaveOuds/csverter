function tags(state= [], action){
  switch(action.type){
    case 'CREATE_TAG' :
      return [ ...state,
        action.tag
      ];
    case 'DELETE_TAG':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i+1)
      ];
    default:
      return state;
  }
}

export default tags;
