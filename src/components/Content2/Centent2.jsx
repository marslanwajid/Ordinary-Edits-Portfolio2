import React from "react";
import "../css/Content2/content2.css";
import $ from 'jquery'


let img1 = "carouselw/01w.jpg"
let img2 = "carouselw/02w.jpg"
let img3 = "carouselw/03w.jpg"
let img4 = "carouselw/04w.jpg"
let img5 = "carouselw/05w.jpg"
let img6 = "carouselw/06w.jpg"
let img7 = "carouselw/07w.jpg"
let img8 = "carouselw/01.jpg"

function contentt2(){
    return (
        <>
        <div className="main2">
            <div className="left2">

                
            


                <div className="namee2">

                </div>

            </div>

            <div className="right2">


            <div className="editingp">
                <h3>Wedding</h3>
                <h1>Photo Editing</h1>

                </div>

            </div>
            <div className="pics">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
            </div>
        </div>
        </>
    )
}

export default contentt2;