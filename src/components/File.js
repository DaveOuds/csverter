import React from 'react';

export default class File extends React.Component{

  readFile(evt){
    if(window.FileReader){
      const file = evt.target.files[0];
      const reader = new FileReader(); 

      // We do have access to this.helloWorld() outside render.onload, but in order to have access to it from
      // render.onload I had to implement a closure, you can read a little bit more about them
      // here : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

      // Wrapping onload anonnymous function within another function
      reader.onload = (function (file, hello) {
        return function (evt) {
        const lines = evt.target.result.split("\n");
        const headers = lines[0].split(",");

        hello();

        for(let i=1; i<lines.length;i++){
          let cl = lines[i];
          var obj = new Object();
          const checkForQuotes = lines[i].match(/(?:"[^"]*"|^[^"]*$)/g);

          for(let x=0;x < checkForQuotes.length; x++){
            cl = cl.replace(cl.match(checkForQuotes[x]), checkForQuotes[x].replace(/,/g, ""));
          }
          cl= cl.split(",");

          for(let j=0; j<headers.length; j++){
            //if(j===2) {
          //    obj[] = cl[j]
          //  }
              obj[headers[j]] = cl[j];
          }
        }
      }
    })(file, this.helloWorld); // <- This is where the magic happens

    reader.readAsText(file);

    } else {
      document.getElementById('errorMessage').removeAttribute("hidden");
    }

  }

  helloWorld = () => {
    console.log("helloWorld");
  }

  render(){
    return(
      <div className='file-reader'>
       <input id="file" type="file" onChange={evt => this.readFile(evt)} accept=".csv"/>
       <label id='errorMessage' hidden>Error browser doesn't support all the functionality of the site please selecte a different browser</label>
      </div>
    )
  }
}
