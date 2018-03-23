import React from 'react';

export default class File extends React.Component{

  readFileTest(evt){
    const file = evt.target.files[0];
    this.fileToText(file).then(function(result, addData) {
      const lines = result.split("\n");
      const headers = lines[0].split(",");
      var res =[];
      res.push(headers);

      for(let i=1; i<lines.length;i++){
        let cl = lines[i];
        const checkForQuotes = lines[i].match(/(?:"[^"]*"|^[^"]*$)/g);

        for(let x=0;x < checkForQuotes.length; x++){
          cl = cl.replace(cl.match(checkForQuotes[x]), checkForQuotes[x].replace(/,/g, ""));
        }
        cl= cl.split(",");
        res.push(cl);
      }
      //turn into JSON object(s)
      //add_data() to push data to store
    });
    }

  fileToText = (file) => {
      const temporaryFileReader = new FileReader();

      return new Promise((resolve, reject) => {

        //Error Handler
        temporaryFileReader.onerror = () => {
          temporaryFileReader.abort();
          reject(new DOMException("Problem parsing input file."));
        };

        //Onload handler
        temporaryFileReader.onload = () => {
          resolve(temporaryFileReader.result);
        };

        temporaryFileReader.readAsText(file);
        });
      };

  render(){
    return(
      <div className='file-reader'>
       <input id="file" type="file" onChange={evt => this.readFileTest(evt)} accept=".csv"/>
       <label id='errorMessage' hidden>Error browser doesn't support all the functionality of the site please selecte a different browser</label>
      </div>
    )
  }
}
