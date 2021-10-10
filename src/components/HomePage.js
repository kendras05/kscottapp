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
			<h5>This was built on Ruby on Rails and uses a webscraper to get return data.</h5>
      <YoutubeEmbed embedId="tPNadVOFsbQ" />
    </div>
  
    <div className="App">
	  <h3>WiX Website</h3>
		<h5>This is an ecommerce site that was built and designed by myself without a template. </h5>
      <YoutubeEmbed embedId="QP9bhcNyaqo" />
    </div>

    <div className="App">
		<h3>Wordpress Website/Heavy CSS</h3>
		<h5>This site required a lot of CSS in order to modify the the pages to meet the needs of the client.</h5>
      <YoutubeEmbed embedId="vQosG2nDE5c" />
    </div>

    <div className="App">
		<h1>"Other Sites I've Briefly Worked On"</h1>
		</div>
    
    <div className="App">
	  <h3>Wordpress Website</h3>
		<h5>Used CSS to change some features on the first page. </h5>
      <YoutubeEmbed embedId="rKSu5PjjKSA" />
    </div>
					
		</React.Fragment>

	);
}


export default HomePage;

