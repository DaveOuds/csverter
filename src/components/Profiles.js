import React from 'react';
import _ from 'lodash';
import Profile from './Profile';

export default class Profiles extends React.Component{
  constructor(){
    super()
    this.state = {
      order : 'ascending',
      filter: [],
      search: {
        searchBy: "firstName",
        searchValue: ""
      }
    };
  }

  renderProfiles(){
    var profiles = this.props.profiles;

    //Filtering
    if(this.state.filter.length > 0){
      profiles =_.filter(profiles, (profile) => {
        for(let i =0 ; i < this.state.filter.length ; i++){
          if(profile.tags.includes(this.state.filter[i])) return profile;
        }
      })
    }

    //Searching
    profiles =_.filter(profiles, (profile) => {
      const checkValue = profile[this.state.search.searchBy];
      if(checkValue.includes(this.state.search.searchValue)) return profile;
    })

    // Sorting
    const sorted = _.sortBy(profiles, 'firstName')

    //Printing
    switch(this.state.order){
      case 'descending':
        return _.map(sorted,(profile,  i) =><Profile {...this.props} key={i} i={i} profile = {profile} />).reverse()
      case 'ascending':
        return _.map(sorted,(profile, i) =><Profile {...this.props} key={i} i={i} profile = {profile} />)
      default:
        return _.map(sorted,(profile, i) =><Profile {...this.props} key={i} i={i} profile = {profile} />)
    }
  }

  renderTagFilter(){
    return(
      <div className="tag-filter">
        <div className="select-tag-filter">
          <label>Filter by: </label>
          <select onChange={(evt) =>this.handleChange(evt)}>
            {this.props.tags.map((tag, i) => {
              return <option value={tag} key={i}>{tag}</option>
            })}
          </select>

          {this.state.filter.map( (value) => {
            return <button onClick={(evt) => this.removeFilter(evt)} key={value} id={value}>{value}</button>
          })}
        </div>
      </div>
    )
  }

  removeFilter(evt){
    //Onclick remove filter
    let state=this.state;
    state.filter.splice(state.filter.indexOf(evt.target.id),1)
    this.setState({state});

  }

  handleChange(evt){
    let state= this.state;
    for(let i=0 ;i<state.filter.length; i++){
      if(state.filter[i]===evt.target.value){
        alert("filter already applied");
        return;
      }
    }
    state.filter.push(evt.target.value);
    this.setState({state});
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
        <div className="search">
        <label> Search By: </label>
          <select onChange={(evt) => this.handleSearchSelect(evt)}>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="email">Email</option>
            <option value="company">Company</option>
            <option value="address">Address</option>
            <option value="position">Position</option>
          </select>

          <input type="text" ref="search-value" onChange={(evt) => this.handleSearch(evt)}/>
        </div>
        <div className="filters">
          {this.renderTagFilter()}
        </div>
        <div className='profiles'>
          {this.renderProfiles()}
        </div>
      </div>
    )
  }

  handleSearchSelect(evt){
    var state =this.state;
    state.search.searchBy= evt.target.value
    this.setState( state )
  }

  handleSearch(evt){
    var state =this.state;
    state.search.searchValue= evt.target.value
    this.setState( state )
  }
}
