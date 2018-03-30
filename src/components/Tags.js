import React from 'react'

export default class Tags extends React.Component{
  render(){
    return(
      <div className="profile-tags">
        <h2>Tags</h2>

        <h3>Selected Tags</h3>
        <div  className="selected-tags">
          <ul id='selected-tags-list'>
            {this.props.profileTags.map((tag, i) => {
              return(
                <li className='tag' key={i}>{tag}</li>
              )
            })}
          </ul>
        </div>

        <div className="available-tags">
          <h3>Available Tags</h3>

          {this.props.tags.map((tag, i)=> {
            return (
              <div className="tag" key={i}>
                <input type="checkbox" id={i} value={tag}  checked={this.props.profileTags.includes(tag)} onChange = { (evt) => this.handleInputChange(evt)}/>
                <label> {tag} </label>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  handleInputChange(evt){
    var profile = this.props.profile;
    if(evt.target.checked){
      profile.tags.push(evt.target.value);
      this.props.add_tag(profile)
    } else {
      profile.tags.splice(profile.tags.indexOf(evt.target.value), 1);
      this.props.remove_tag(profile)
    }
  }
}
