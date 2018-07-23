This web application was build using the React tutorial and is my first React-redux application. The main purpose of this project was to get familiar with the react framework in combination with the redux library. Therefore there is no time spend on the CSS and / or styling of the website.

React works on the following principles:
A react application consists of components. Every component stores it's own state. Whenever the state is set (changed) the component rerenders.

Redux:
Redux implements a store inside the application. A store can be seen as a state which can be accessed by all components through actions and reducers. An action is a function that dispatches to a reducer to set the state of the store.

For the local development environment we use the npm package "create-react-app". To use this package, make sure Node.js is installed.

Windows:
http://blog.teamtreehouse.com/install-node-js-npm-windows

Mac:
http://blog.teamtreehouse.com/install-node-js-npm-mac

1. Run: 'npm install -g create-react-app'.
2. Run: 'npm install react redux react-redux react-dom --save'.
3. Run: 'create-react-app my-app'.
4. Clear the my-app/src directory.

Now we have an empty react development environment. Time to give it some content. We start with the index page. This is the entry point of the client which contains the router of the site. The other noticeable thing is the registerServiceWorker, which is a web API that adds offline capabilities to the site. It helps the application by caching the assets and files. This way to site keeps working offline or on a slow network

5. Create src/index.js and add the following lines:
"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
        <Switch>
          <Route path="/" component ={App} />
        </Switch>
    </div>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
"

Now that we have an entry point, it's time to start building our app.

6. Create src/App.js and add the following lines :
"
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    profiles: state.profiles,
    tags: state.tags
  }
}

function mapDispachToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;

"

App.js can be seen as the main component of the application. All the other components are childeren of App.js. Functionality and attributes are passed to the child components as properties.

Components:
There are several ways to create an react component. We use the following:

"
import React from 'react';

export default class Main extends React.Component{

  constructor(props){
    super(props)
    this.state = {};
  }

  render() {
    return (
    )
  }
}
"

Actions
It's best practice to declare all of the actions inside of a separate folder (src/actions).

"
export function action_name(argument){
  return{
    type: "REDUCER",
    argument
  }
}
"

Reducers
Every store attribute has it's own reducer in a separate folder(src/reducers/reducer). Each reducers is basically a switch case that distinguishes between the action type. All of the reducers are linked together in the src/reducers/index.js file. 

src/reducers/index.js:"
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import otherReducers1 from './otherReducers1'
import otherReducers2 from './otherReducers2'

const rootReducer = combineReducers({otherReducers1, otherReducers2 routing: routerReducer});

export default rootReducer;
"
