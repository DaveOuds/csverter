import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    email : { firstName :state.firstname,
              lastName: state.lastName,
              company: state.company,
              position: state.position,
              connectedOn: state.connectedOn,
              tags: state.tags
            }

  }
}

function mapDispachToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
