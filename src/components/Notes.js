import React from 'react'

export default class Notes extends React.Component{
  render(){
    return(
      <div className='notepadpp'>
        {this.renderNotes()}

      <form ref='noteForm' onSubmit={(evt) => this.handleSubmit(evt)}>
          <input type="text" ref="note" placeholder="Add note..."/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }

  handleSubmit(event){
    event.preventDefault();
    var profile = this.props.profile;
    profile.notes.push(this.refs.note.value);
    this.props.add_note(profile);
    this.refs.noteForm.reset();
 }

  renderNotes(){
    return(
      <ul className='notes'>
        {this.props.notes.map((note, i) =>{
          return(
            <li className='note' key={i} id={i}>
              {note}
              <button className="remove-note" onClick={() => this.handleRemove(i)}> delete</button>
            </li>
          )
        })}
      </ul>
    )
  }

  handleRemove(i){
    var profile = this.props.profile;
    profile.notes.splice(i, 1);
    this.props.remove_note(profile);
  }
}
