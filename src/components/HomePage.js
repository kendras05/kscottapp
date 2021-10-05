import "bootstrap/dist/css/bootstrap.min.css"; 
import React from "react";
import me from '../images/me.png';

function HomePage() {
	return (
		<React.Fragment>
		<div  styles={{ backgroundImage:`url(${me})` }}>
		<div className="jumbotron">
					<h1>Kendra Scott</h1>
					<p>Jr. Software Developer. Looking for first fulltime opportunity! Thank you for being here.</p>
		</div>
		</div>
    <img src="https://www.dropbox.com/home/Resumes?preview=green.pn" class="img-fluid" alt="..." />
		</React.Fragment>

	);				
}


export default HomePage;

