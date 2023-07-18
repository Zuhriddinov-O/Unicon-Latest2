import React from 'react';
import './category.css'

import CommentImg from '../images/comment.png'
import { cat1Data } from "../dataforcat1/dataforcat1.jsx";
// import { useEffect, useState, } from 'react'
const Category = (props) => {
    //   const [count, setCount] = useState(0)

    return (
        <>
            <React.Fragment>
                <div className="c1paragraph">
                    <p> Books</p>
                </div>
                <div key={"cat1"} className="cat1">
                    {cat1Data.map((item) => {
                        if (props.search === false) {
                            return (
                                <div className="cat1__card">
                                    <div className="cat1__container">
                                        <div className="cat1__card-top" >
                                            <img src={item.image} alt="" />

                                        </div>
                                        <div className="items_name"><h2 className="name">{item.name.slice(0, 30)}...</h2></div>
                                        <div className="cat1__card-bottom">
                                            <h3 className="kond" >{"Price: " + item.kond}</h3>
                                            <h3 style={{ textDecoration: "none" }} className="price">{"Discount:" + item.price}</h3>
                                            <h3 className="month">{item.month + "/12"}</h3>
                                            <div className="commentimg"><img src={CommentImg} alt="" />{item.feedback}</div>
                                            <div className="Buy"><button>Buy</button></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else if (item.name.toLowerCase().includes(props.word.toLowerCase())) {
                            return (
                                <div className="cat1__card">
                                    <div className="cat1__container">
                                        <div className="cat1__card-top" >
                                            <img src={item.image} alt="" />

                                        </div> <h2 className="name">{item.name.slice(0, 30)}...</h2>
                                        <div className="cat1__card-bottom">
                                            <h3 className="kond" >{"Price: " + item.kond}</h3>
                                            <h3 className="price">{"Discount:" + item.price}</h3>
                                            <h3 className="month">{item.month + "/12"}</h3>
                                            <div className="commentimg"><img src={CommentImg} alt="" />{item.feedback}</div>
                                            <div className="Buy"><button>Buy</button></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </React.Fragment>
        </>
    );
}

export default Category
