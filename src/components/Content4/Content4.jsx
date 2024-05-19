import React from "react";
import "../css/Content4/content4.scss"


let img1 = "carouselr/01r.jpg"
let img2 = "carouselr/02r.jpg"
let img3 = "carouselr/03r.jpg"
let img4 = "carouselr/04r.jpg"
let img5 = "carouselr/05r.jpg"




function contentt4(){
    return (
        <>
        <div className="main4">
            <div className="left4">

                


                <div className="namee4">

                </div>

            </div>

            <div className="right4">

            <div className="editingp">
                <h3>Real Estate</h3>
                <h1>Photo Editing</h1>
                <p>Interior and Exterior</p>
                

                </div>

            </div>
            <div className="pics">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
            </div>
        </div>
        </>
    )
}

export default contentt4;