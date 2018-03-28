import React from 'react';

export default class Profile extends React.Component{
  constructor(){
    super()
    this.state = {
      notes: []
    };
  }

  render(){
    const {profile} = this.props;

    return(
      <div className="profile" key={this.props.i}>
        <h2>{profile.firstName +" " +profile.lastName}</h2>
        <p> {profile.email}       </p>
        <p> {profile.address}     </p>
        <p> {profile.company}     </p>
        <p> {profile.position}    </p>
        <p> {profile.connectedOn} </p>
        <p> {profile.tags}        </p>

          {this.renderNotes()}
          <form ref='noteForm' onSubmit={(evt) => this.handleSubmit(evt)}>
            <input type="text" ref="note" placeholder="note"/>
            <input type="submit" hidden/>
          </form>
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

  renderNotes(){
    return(
      <ul className='notes'>
        {this.state.notes.map((note, i) =>{
          return(
            <li className='note' key={i}>{note}</li>
          )
        })}
      </ul>
    )
  }
}
