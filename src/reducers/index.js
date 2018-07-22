import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import profiles from './profiles'
import tags from './tags'

const rootReducer = combineReducers({profiles, tags, routing: routerReducer});

export default rootReducer;
