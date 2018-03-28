import React from 'react';
import { Link } from 'react-router';


export default class Main extends React.Component{
  render() {
    return (
      <div>
        <h1> <Link to="/">CSVerter</Link>  </h1>
        <h2> <Link id='tag-page' to={`/tags`}>Tags</Link> </h2> 

        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
