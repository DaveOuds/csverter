import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({files, routing: routerReducer });

function files(state=[], action){

  switch(action.type){
    case 'ADD_DATA':
      return [...state,
          action.email: {
            firstName: action.firstName,
            lastName: action.lastName,
            company: action.company,
            position: action.position,
            connectedOn: action.connectedOn,
            tags: action.tags
          }
        ];
    default:
      return state;
  }
}

export default rootReducer;
