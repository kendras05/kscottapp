import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import "../App.css";
import YoutubeEmbed from "./YoutubeEmbed";

function App() {
	function getPage() {
    const route = window.location.pathname;
		if (route === "/about") return <AboutPage />;
		return <HomePage />;
	}	
	return (
		<React.Fragment>
	  <div className="container-fluid">
			<Header />
			{getPage()}
		</div>
	);
	return (
    <div className="App">
      <h1>My Projects</h1>
			<h3>Stamina</h3>		
      <YoutubeEmbed embedId="tPNadVOFsbQ" />
    </div>
  );
  
	return (
    <div className="App">
	  <h3>WiX Website</h3>
      <YoutubeEmbed embedId="QP9bhcNyaqo" />
    </div>
		</React.Fragment>
  ); 


}


export default App;
