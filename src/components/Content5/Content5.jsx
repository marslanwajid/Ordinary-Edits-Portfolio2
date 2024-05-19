import React from "react";
import "../css/Content5/content5.scss"


let img1 = "carouselpd/01pd.png"
let img2 = "carouselpd/02pd.png"
let img3 = "carouselpd/03pd.png"
let img4 = "carouselpd/04pd.jpg"
let img5 = "carouselpd/05pd.png"
let img6 = "carouselpd/06pd.jpg"
let img7 = "carouselpd/07pd.jpg"
let img8 = "carouselpd/08pd.jpg"
let img9 = "carouselpd/09pd.png"
let img10 = "carouselpd/10pd.jpg"

function content5(){
    return (
        <>
        <div className="main5">
            <div className="left5">

                

            <div className="editingp">
                <h3>Product</h3>
                <h1>Photo Editing</h1>
                

                </div>

                <div className="namee5">

                </div>

            </div>

            <div className="right5">


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
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
            </div>
        </div>
        </>
    )
}

export default content5;