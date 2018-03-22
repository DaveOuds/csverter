import React from 'react';
import File from './File'

export default class Upload extends React.Component{
  render(){
    return(
      <File {...this.props}/>
    )
  }
}
