import React from "react";
import "./navbar.css"
import UCicon from "../images/navbarimg/UCicon.jpg"
import Sicon from '../images/navbarimg/searchicon.jpg'
import { Link } from "react-router-dom";

import bookimgcat from "../imgforcat1/bookimgcat.jpg"
import imgtvcat1 from "../imgforcat1/imgtvcat1.jpg"
import imgwatchcat2 from "../imgforcat1/imgwatchcat2.jpg"
import aircimgcat3 from "../imgforcat1/aircimgcat3.jpg"
import { useState, useEffect } from "react";

// import { useEffect, useState, } from 'react'
// import { allData } from "../all/all";


const Navbar = (props) => {
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            setScroll(window.pageYOffset)
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    console.log(scroll);;
    return (
        <>
            <React.Fragment>
                <div className="link">
                    <div className="Uicon"><img src={UCicon} alt="" /><p>UniCon</p></div>
                    <div className="inp"><input className="input" type="search" placeholder="Search..." onChange={(e) => props.setWord(e.target.value)} />
                        <button><img src={Sicon} alt="" /></button></div>
                    <div className="pages">
                        <Link to={"/"}><p className="home">Home</p></Link>
                        <Link to={"/next"} style={{ margin: "0px 0px 0px 50px" }}><p className="next">Next</p></Link>
                    </div>
                    <div className="containerbtn">
                        <div className={scroll > 100 ? "btn scrolled" : "btn"}>
                            <div className="paragraph">
                                <p>Source Category:</p>
                            </div>
                            <button className="booksbtn">

                                <Link to={"/category"} style={{ margin: "0px 0px 0px 0px", color: "black", fontSize: "10px" }}> <img src={bookimgcat} alt="" /><p>Books</p></Link>
                            </button>
                            <button className="tvbtn">

                                <Link to={"/category2"} style={{ margin: "0px 0px 0px 0px", color: "black", fontSize: "10px" }}> <img src={imgtvcat1} alt="" /><p>Televisions</p></Link>

                            </button>
                            <button className="watchbtn">

                                <Link to={"/category3"} style={{ margin: "0px 0px 0px 0px", color: "black", fontSize: "10px" }}><img src={imgwatchcat2} alt="" /><footer>Smart Watches</footer></Link>

                            </button>
                            <button className="airbtn">

                                <Link to={"/category4"} style={{ margin: "0px 0px 0px 0px", color: "black", fontSize: "10px" }}> <img src={aircimgcat3} alt="" /><footer>Air Conditioners</footer></Link>
                            </button>
                        </div>
                    </div>

                </div>
            </React.Fragment >
        </>
    );
}

export default Navbar;