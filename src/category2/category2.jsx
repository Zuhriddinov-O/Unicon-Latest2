import React from 'react';
import './category2.css'


import CommentImg from '../images/comment.png'
import { cat2Data } from "../dataforcat2/dataforcat2.jsx";
// import { useEffect, useState, } from 'react'
const Category2 = (props) => {
    // const [count, setCount] = useState(0)
    return (
        <>
            <React.Fragment>
                <div className="c2paragraph">
                    <p>Televisions</p>
                </div>
                <div key={"cat2"} className="cat2">
                    {cat2Data.map((item) => {
                        if (props.search === false) {
                            return (
                                <div className="cat2__card">
                                    <div className="cat2__container">
                                        <div className="cat2__card-top" >
                                            <img src={item.image} alt="" />

                                        </div>
                                        <div className="items_name"><h2 className="name">{item.name.slice(0, 30)}...</h2></div>
                                        <div className="cat2__card-bottom">
                                            <h3 className="kond" >{"Price: " + item.kond}</h3>
                                            <h3 className="price">{"Discount:" + item.price}</h3>
                                            <h3 className="month">{item.month + "/12"}</h3>
                                            <div className="commentimg"><img src={CommentImg} alt="" />{item.feedback}</div>
                                            <div className="Buy"><button>Buy</button></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else if (item.name.toLowerCase().includes(props.word.toLowerCase())) {
                            return (
                                <div className="cat2__card">
                                    <div className="cat2__container">
                                        <div className="cat2__card-top" >
                                            <img src={item.image} alt="" />

                                        </div> <h2 className="name">{item.name.slice(0, 30)}...</h2>
                                        <div className="cat2__card-bottom">
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

export default Category2;
