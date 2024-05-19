import React from "react";
import "./connection.scss"
import $ from 'jquery'

import Navv from "./components/Navv"
import Contentt1 from "./components/Contentt1";
import Content2 from "./components/Content2/Centent2";
import Content2carousel from "./components/Content2/Content2carousel";
import Content3 from "./components/Content3/Content3"
import Content3carousel from "./components/Content3/Content3carousel";
import Content4 from "./components/Content4/Content4";
import Content4carousel from "./components/Content4/Content4carousel";
import Content5 from "./components/Content5/Content5";
import Content5carousel from "./components/Content5/Content5carousel";
import Content6 from "./components/Content6";
import Maing from "./components/Gallery/Maing";
import Footerr from "./components/Footerr";
import { Route, Routes } from "react-router-dom";



let hrcolor = {
  border:"1px solid rgba(254,252,243,255)"
}
let styleb = {
  backgroundColor:"rgba(0, 0, 0, 0.541)"
}

// carousels toggles 


const click2 = () => {
  $(".carousel2").fadeToggle();
}

const click3 = () => {
  $(".carousel3").fadeToggle();
}

const click4 = () => {
  $(".carousel4").fadeToggle();
}

const click5 = () => {
  $(".carousel5").fadeToggle();
}




// Main function --------------- 

function App(){

  return (
    <>
    <Routes>
            <Route path="/" element = {"/"}/>
            <Route path="/gallery" element = {<Maing/>}/>
            <Route path="/services" element = {"#contentt2"}/>
        </Routes>
    <div className="navbar">
    <Navv />

    
    </div>
    

    <div className="contentt1">

    <hr style={hrcolor} />
    <Contentt1 />

    </div>
    {/* End of Content 1  */}


{/* Starting of Content 2 , Wedding Photo Editing */}

     <div id="contentt2" className="contentt2">

    <Content2 />


<div className="button2">
    <button className='click2' style={styleb} onClick={click2}>+ For more Samples</button>
</div>
    <div className="carousel2">
    
    <Content2carousel />
    
    </div>
    
    </div>



   <div id="contentt3" className="contentt3">
    <Content3 />

    <div className="button3">
    <button className='click3' style={styleb} onClick={click3}>+ For more Samples</button>
    </div>

    <div className="carousel3">
    <Content3carousel />
    </div>

    </div>

    <div id="contentt4" className="contentt4">
    <Content4 />

    <div className="button4">
    <button className='click4' style={styleb} onClick={click4}>+ For more Samples</button>
    </div>
    <div className="carousel4">
    <Content4carousel />
    </div>
    </div>


     <div id="contentt5" className="contentt5">

    <Content5 />

    <div className="button5">
    <button className='click5' style={styleb} onClick={click5}>+ For more Samples</button>
    </div>

    <div className="carousel5">

    <Content5carousel />
    
    </div>
    </div>

    <div id="contentt6" className="contentt6">
    <Content6 />
    </div>

   <div id="footerr" className="footerr">
    <Footerr />
    </div>
    
    
    </>
  )
} 

export default App;