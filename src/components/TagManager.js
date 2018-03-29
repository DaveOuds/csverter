import React from 'react';

export default class TagManager extends React.Component{
  renderTags(){
    return(
      <ul className="tags">
        {this.props.tags.map((tag, i)=> {
          return (
            <li className='tag' key={i}>
              {tag}
              <button className="remove-tag" onClick={() => this.props.delete_tag(i)}> delete</button>
            </li>
          )
        })}
      </ul>
    )
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.create_tag(this.refs.tag.value);
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
