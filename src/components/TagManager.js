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
    const newTag = this.refs.tag.value;

    for (let i=0; i <this.props.tags.length; i++){
      if(this.props.tags[i]=== newTag) {
        alert("Tag already exists");
        this.refs.tagForm.reset();
        return;
      }
    }
    this.props.create_tag(newTag);
    this.refs.tagForm.reset();
 }

  render() {
    return(
      <div className='tags'>
        <div className='existing-tags'>
          <h3>These are the excisting tags</h3>
          {this.renderTags()}
        </div>

        <div className='create-Tags'>
          <h3>Create your tags</h3>
          <form ref='tagForm' onSubmit={(evt) => this.handleSubmit(evt)}>
            <input type="text" ref="tag" placeholder="Create a tag"/>
            <input type="submit" hidden/>
          </form>

        </div>
      </div>
    )
  }
}
