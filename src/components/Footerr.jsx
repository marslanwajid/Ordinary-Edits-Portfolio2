import React from "react";
import "./css/footerr.css"
import Videoc from "./Videoc"

let edits = "./images/edits.jpg"
let snaps = "./images/snaps.jpg"

let mailstyle = {
    fontWeight:"100"
}
function footerr (){
    return (
        <>
        <div className="mainf">
            <div className="leftf">

                <div className="editingp">
                <h1>Ordinary Edits</h1>
                <h5>About</h5>
                <p>My Name is Muhammad Arslan Wajid. <br />
                I am passionate Photo Editor and Retoucher <br />
                Having Experience of 3+ years in this field. <br />
                I have done various Freelance projects for <br />
                my Upwork and Fiverr clients.  </p>
                

                </div>

                

                <div className="nameef">
                    {/* <h1>Motto</h1> */}
                    <h4>E-Mail <br /> <br /> <span style={mailstyle}> ordinarysnapsss@gmail.com </span> </h4>
                    <h4>Contact</h4>

                </div>

                <div className="iconss">
                    
                      <a href="https://www.instagram.com/ordinary_edits._?igsh=eXRrM213NTZpbzFt"> <img src={edits} alt="" /> </a>
                      <a href="https://www.instagram.com/ordinary_snaps._?igsh=a3JtNzVmN2RhaXd3"> <img src={snaps} alt="" /> </a>
                    
                </div>
            </div>

            <div className="rightf">

                         

            </div>
        </div>
        </>
    )
}


export default footerr;  