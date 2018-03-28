import React from 'react';

export default class Tags extends React.Component{
  renderTags(){
    return(
      <ul className="tags">
        {this.props.tags.map((tag, i)=> {
          return (
            <li className='tag' key={i}>{tag.tag}</li>
          )
        })}
      </ul>
    )
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.add_tag(this.refs.tag.value);
    this.refs.tagForm.reset();
 }

  render() {
    return(
      <div className='tags'>
        <div className='existing-tags'>
          <h2>These are the excisting tags</h2>
          {this.renderTags()}
        </div>

        <div className='create-Tags'>
          <h2>create your tags</h2>
          <form ref='tagForm' onSubmit={(evt) => this.handleSubmit(evt)}>
            <input type="text" ref="tag" placeholder="tag"/>
            <input type="submit" hidden/>
          </form>

        </div>
      </div>
    )
  }
}