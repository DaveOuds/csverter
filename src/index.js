import React from 'react';
import { render} from 'react-dom';

//import css

import Profiles from './components/Profiles'
import App from './components/App'
import Upload from './components/Upload'
import Tags from './components/Tags'
//import react router deps
import { Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Upload}></IndexRoute>
        <Route path="/profiles" component={Profiles}></Route>
        <Route path="/tags" component={Tags}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
