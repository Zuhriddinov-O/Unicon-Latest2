import React from 'react';
import './category3.css'

import CommentImg from "../images/comment.png"
import { cat3Data } from "../dataforcat3/dataforcat3.jsx"

const Category3 = (props) => {
    return (
        <>
            <React.Fragment>
                <div className="c3paragraph">
                    <p>Smart Watches</p>
                </div>
                <div key={"cat3"} className="cat3">
                    {cat3Data.map((item) => {
                        if (props.search === false) {
                            return (
                                <div className="cat3__card">
                                    <div className="cat3__container">
                                        <div className="cat3__card-top" >
                                            <img src={item.image} alt="" />

                                        </div>
                                        <div className="items_name"><h2 className="name">{item.name.slice(0, 30)}...</h2></div>
                                        <div className="cat3__card-bottom">
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
                                <div className="cat3__card">
                                    <div className="cat3__container">
                                        <div className="cat3__card-top" >
                                            <img src={item.image} alt="" />

                                        </div> <h2 className="name">{item.name.slice(0, 30)}...</h2>
                                        <div className="cat3__card-bottom">
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

export default Category3;
