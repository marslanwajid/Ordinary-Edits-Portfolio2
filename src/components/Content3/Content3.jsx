import React from "react";
import "../css/Content3/content3.scss"

let img1 = "carouselp/01p.jpg"
let img2 = "carouselp/02p.jpg"
let img3 = "carouselp/03p.jpg"
let img4 = "carouselp/04p.jpg"
let img5 = "carouselp/05p.jpg"
let img6 = "carouselp/06p.jpg"



function content3(){
    return (
        <>
        <div className="main3">
            <div className="left3">

                

            <div className="editingp">
                <h3>Portrait</h3>
                <h1>Photo Editing</h1>
                

                </div>

                <div className="namee3">

                </div>

            </div>

            <div className="right3">


            </div>
            <div className="pics">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    
                    
            </div>
        </div>
        </>
    )
}

export default content3;