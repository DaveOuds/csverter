import React from 'react';
import Notes from './Notes'
import Tags from './Tags'

export default class Profile extends React.Component{
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

        <Notes {...this.props} notes={profile.notes}/>

        <Tags {...this.props} tags={profile.tags}/>
        
      </div>
    )
  }
}
