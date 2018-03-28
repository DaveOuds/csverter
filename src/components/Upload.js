import React from 'react';
import { Link } from 'react-router';

export default class Upload extends React.Component{
  readFile(evt){
    if(window.FileReader){
      const file = evt.target.files[0];
      const reader = new FileReader(); 

      reader.onload = (function (action) {
        return function (evt) {
          const lines = evt.target.result.split("\n");

          lines.map((line)=>{
            const checkForQuotes = line.match(/(?:"[^"]*"|^[^"]*$)/g);

            for(let x=0;x < checkForQuotes.length; x++){
              line = line.replace(line.match(checkForQuotes[x]), checkForQuotes[x].replace(/,/g, ""));
            }

            line= line.split(",");
            if(line.length === 6) action(line);
          });
        }
      })(this.callAction);

      reader.readAsText(file);

      document.getElementById('profilesButton').removeAttribute("hidden");
    } else {
      document.getElementById('errorMessage').removeAttribute("hidden");
    }
  }

  callAction = (payload) => {
    this.props.add_data(payload);
  }

  render(){
    return(
      <div className='file-reader'>
       <input id="file" type="file" onChange={evt => this.readFile(evt)} accept=".csv"/>
       <label id='errorMessage' hidden>Error browser does not support all the functionality of the site please selecte a different browser</label>
       <Link id='profilesButton' to={`/profiles`} hidden>Go to profile page.</Link>
      </div>
    )
  }
}
