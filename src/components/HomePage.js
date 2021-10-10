import "bootstrap/dist/css/bootstrap.min.css"; 
import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import "../App.css";


function HomePage() {
	return (
		<React.Fragment>
		<div className="jumbotron">
					<h1>Kendra Scott</h1>
					<p>Jr. Software Developer. Looking for first fulltime opportunity! Thank you for being here.</p>
		</div>
   
    <div className="App">
      <h1>My Projects</h1>
			<h3>Stamina</h3>		
      <YoutubeEmbed embedId="tPNadVOFsbQ" />
    </div>
  
    <div className="App">
	  <h3>WiX Website</h3>
      <YoutubeEmbed embedId="QP9bhcNyaqo" />
    </div>

    <div className="App">
		<h3>Wordpress Website/Heavy CSS</h3>
      <YoutubeEmbed embedId="vQosG2nDE5c" />
    </div>
		</React.Fragment>
	);
}


export default HomePage;

