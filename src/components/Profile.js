import React from 'react';

export default class Profile extends React.Component{
  constructor(){
    super()
    this.state = {
      notes: [],
      tags: []
    };
  }

  render(){
    const {profile} = this.props;

    return(
      <div className="profile" key={this.props.i}>
        <div className="profile-info">
          <h2>{profile.firstName +" " +profile.lastName}</h2>
          <p> {profile.email}       </p>
          <p> {profile.address}     </p>
          <p> {profile.company}     </p>
          <p> {profile.position}    </p>
          <p> {profile.connectedOn} </p>
        </div>

        <div className="profile-notes">
          <h2>Notes</h2>
          {this.renderNotes()}
          <form ref='noteForm' onSubmit={(evt) => this.handleSubmit(evt)}>
            <input type="text" ref="note" placeholder="note"/>
            <input type="submit" hidden/>
          </form>
        </div>

        {this.renderTags()}
      </div>
    )
  }

  handleSubmit(event){
    event.preventDefault();
    var newNotes = this.state.notes.slice()
    newNotes.push(this.refs.note.value)
    this.setState({notes: newNotes})
    this.refs.noteForm.reset();
 }

 remove_note(i){
   let noteArray= this.state.notes;
   noteArray.splice(i, 1)
   this.setState({tags: noteArray});
 }

  renderNotes(){
    return(
      <ul className='notes'>
        {this.state.notes.map((note, i) =>{
          return(
            <li className='note' key={i}>
              {note}
              <button className="remove-note" onClick={() => this.remove_note(i)}> delete</button>
            </li>
          )
        })}
      </ul>
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

  renderTags(){
    return(
      <div className="profile-tags">
        <h2>Tags</h2>
        <ul className="selected-tags">
          {this.state.tags.map((tag, i) => {
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
}
