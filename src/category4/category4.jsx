import React from 'react';
import './category4.css'


import CommentImg from "../images/comment.png"
import { cat4Data } from "../dataforcat4/dataforcat4.jsx"

const Category4 = (props) => {
    return (
        <>
            <React.Fragment>
                <div className="c4paragraph">
                    <p>Air Conditioners</p>
                </div>
                <div key={"cat4"} className="cat4">
                    {cat4Data.map((item) => {
                        if (props.search === false) {
                            return (
                                <div className="cat4__card">
                                    <div className="cat4__container">
                                        <div className="cat4__card-top" >
                                            <img src={item.image} alt="" />

                                        </div>
                                      
                                        <div className="items_name"><h2 className="name">{item.name.slice(0, 30)}...</h2></div>
                                        <div className="cat4__card-bottom">
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
                                <div className="cat4__card">
                                    <div className="cat4__container">
                                        <div className="cat4__card-top" >
                                            <img src={item.image} alt="" />

                                        </div> <h2 className="name">{item.name.slice(0, 30)}...</h2>
                                        <div className="cat4__card-bottom">
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

export default Category4
