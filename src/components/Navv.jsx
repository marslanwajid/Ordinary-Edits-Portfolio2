import React from "react";
import "./css/navv.css"
import { Link, Route, Routes } from "react-router-dom";
import Maing from "./Gallery/Maing"
import App from "../App"


function navv(props){
    return (
        <>
        
         <div className="navbar"> 
        <ul>
       <Link to={"/"}><li id="homee"> Home</li> </Link>
        </ul>
        
        <ul className="others">
            
            
           <Link to={"/gallery"}><li id="navitem-left">Gallery</li></Link>
           {/* <a href="#contentt2"> <li id="navitem-left">Services</li> </a> */}
           <a href="#contentt2"> <li id="navitem-left">Services</li> </a>
           <a href="#footerr"> <li id="navitem-left">Contact</li> </a>
            {/* <li id="navitem-left">{props.newli}</li>
            <li id="navitem-left">{props.newli2}</li>
            <li id="navitem-left">{props.newli3}</li> */}

        </ul>
        </div>
        

        
        </>
    )
}



export default navv;