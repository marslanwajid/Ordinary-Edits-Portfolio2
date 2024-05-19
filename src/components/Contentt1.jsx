import React from "react";
import "./css/content1.css"

let img1 = "images/01.jpg"
let img2 = "images/02.jpg"
let img3 = "images/03.jpg"
let img4 = "images/04.jpg"
function content (){
    return (
        <>
        <div className="main">
            <div className="left">

                <div className="editingp">
                <p>Welcome To</p>
                <h1>Ordinary Edits</h1>
                {/* <p id="port">Porfolio</p> */}

                </div>

                <div className="vl">

                </div>

                <div className="namee">
                    <h1>Motto</h1>
                    <p id="mottoo">Here, I weave pixels into stories, turning ordinary <br /> images into captivating visual narratives.</p>
                </div>

            </div>

            <div className="pics">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
            </div>

            <div className="right">

                

            </div>
        </div>
        </>
    )
}


export default content;  