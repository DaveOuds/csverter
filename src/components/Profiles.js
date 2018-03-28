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
        <div className='filter-buttons'>
          <button id='sortButton' onClick={() => this.sortData()}>{this.state.order ==='descending' ? 'Sort AZ' : 'Sort ZA'}</button>

          <select>
            <option value="firstName">First name</option>
            <option value="lastName">Last name</option>
            <option value="email">Email address</option>
            <option value="firstName">First name</option>
            <option value="tags">Tags</option>
            <option value="company">Company</option>
            <option value="position">Position</option>
            <option value="connectedOn">Connected on</option>
          </select>

          <input placeholder='Search...'type="text" ref="searchBar" onChange={(evt) => this.handleFiltSort(evt)}/>
        </div>

        <div className='profiles'>
          {this.renderProfiles()}
        </div>
      </div>
    )
  }

  handleFiltSort(event){
    console.log(event)
    console.log(this.refs.sefi.value)
  }
}
