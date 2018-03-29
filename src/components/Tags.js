import React from 'react'

export default class Tags extends React.Component{
  render(){
    return(
      <div className="profile-tags">
        <h2>Tags</h2>
        <ul className="selected-tags">
          {this.props.tags.map((tag, i) => {
            return(
              <li className='tag' key={i}>{tag}</li>
            )
          })}
        </ul>

        <div className="available-tags">
          {this.props.tags.map((tag, i)=> {
            return (
              <div className="tag" key={i}>
                <input type="checkbox" name="checkbox" id={i} value="value" onChange={(evt) => this.handleInputChange(evt)}/>
                <label htmlFor="checkbox_{i}">{tag}</label>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  handleInputChange(evt){
    if(evt.target.checked){
      let tagArray = this.state.tags;
      tagArray.push(this.props.tags[evt.target.id]);
      this.setState({tags: tagArray});
    } else {
      let tagArray= this.state.tags;
      tagArray.splice(evt.target.id, 1)
      this.setState({tags: tagArray});
    }
  }
}
