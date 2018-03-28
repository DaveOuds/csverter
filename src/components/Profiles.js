import React from 'react';
import _ from 'lodash';
import Profile from './Profile';

export default class Profiles extends React.Component{
  constructor(){
    super()
    this.state = {
      order: 'ascending',
    };
  }

  renderProfiles(){
    const sorted = _.sortBy(this.props.profiles, 'firstName')

    switch(this.state.order){
      case 'descending':
        return _.map(sorted,(profile, i) =><Profile {...this.props} key={i} i={i} profile = {profile} />).reverse()
      default:
        return _.map(sorted,(profile, i) =><Profile {...this.props} key={i} i={i} profile = {profile} />)
    }
  }

  sortData(){
    if(this.state.order==='ascending'){
      this.setState({
        order: 'descending',
      })
    } else {
      this.setState({
        order: 'ascending'
      })
    }
  }

  render() {
    return (
      <div className="profiles-page">
        <div className='profiles'>
          {this.renderProfiles()}
        </div>
      </div>
    )
  }
}
