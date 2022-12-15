import React from "react";
import { Link } from "react-router-dom";
import { arrCollection } from "../../../Photos/images";
import "./nav.css";

function Nav (){
    return(
        < >
        <div className="header">

        <Link to=""><img src={arrCollection[1]} alt=""/></Link>

        <h4>United Evangelical Church <br></br> Cathedral of Grace, Mercy and Peace <br></br> #16 Urualla / Lumumber Street Mile 1 Diobu Portharcourt</h4>
        
<div className="nav">
    <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Service">Our Live Services</Link></li>
        <li><Link to="">Upcoming Events</Link></li>
    </ul>
       
       </div>

       <ul className="menu">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/Service">Our Live Services</Link></li>
        <li><Link to="">Upcoming Events</Link></li>
    </ul>
        </div>
        </>
    )
}

export default Nav