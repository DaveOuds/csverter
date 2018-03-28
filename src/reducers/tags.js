function tags(state= [], action){
  switch(action.type){
    case 'ADD_TAG' :
      return [ ...state,{
        tag: action.tag
      }];
    case 'REMOVE_TAG':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i+1)
      ];
    default:
      return state;
  }
}

export default tags;
