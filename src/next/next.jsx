import React from "react";
import "./next.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

// import MainCard2 from "../Card2/card2";

import slideair from "../imgforcat1/slideairc.jpg"
import slideair2 from "../imgforcat1/slideairc2.jpg"
import slideair3 from "../imgforcat1/slideairc3.jpg"
// import slideair4 from "../imgforcat1/slideairc4.jpg"

import slidebook from "../imgforcat1/slidebook.jpg"
import slidebook2 from "../imgforcat1/slidebook2.jpg"

import slidetoy from "../imgforcat1/slidetoy.jpg"
// import slidetoy2 from "../imgforcat1/slidetoy2.jpg"

import slidetv from "../imgforcat1/slidetv.jpg"
import slidetv2 from "../imgforcat1/slidetv2.jpg"
import slidetv3 from "../imgforcat1/slidetv3.jpg"

import slidewatch from "../imgforcat1/slidewatch.jpg"
import slidewatch2 from "../imgforcat1/slidewatch2.jpg"
import slidewatch3 from "../imgforcat1/slidewatch3.jpg"

import CommentImg from '../images/comment.png'
import { halfData } from "../datafornext/datanext.jsx";

const Next = (props) => {

    return (
        <React.Fragment>
            <Swiper className="mySwiper2"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

            >
                <SwiperSlide className="swiperSlide">
                    <div className="slideimg">
                        <img className="slide2" src={slideair} alt="" />
                        <img className="slide2" src={slideair2} alt="" />
                        <img className="slide2" src={slideair3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <div className="slideimg">
                        <img className="slide2" src={slidebook} alt="" />
                        <img className="slide2" src={slidebook2} alt="" />
                        <img className="slide2" src={slidetoy} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <div className="slideimg">
                        <img className="slide2" src={slidetv} alt="" />
                        <img className="slide2" src={slidetv2} alt="" />
                        <img className="slide2" src={slidetv3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <div className="slideimg">
                        <img className="slide2" src={slidewatch} alt="" />
                        <img className="slide2" src={slidewatch2} alt="" />
                        <img className="slide2" src={slidewatch3} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div key={"next"} className="items">
                {halfData.map((item) => {
                    if (props.search === false) {
                        return (
                            <div className="next__card">
                                <div className="next__container">
                                    <div className="next__card-top" >
                                        <img src={item.image} alt="" />

                                    </div>
                                    <div className="items_name"><h2 className="name">{item.name.slice(0, 23)}...</h2></div>
                                    <div className="next__card-bottom">
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
                            <div className="next__card">
                                <div className="next__container">
                                    <div className="next__card-top" >
                                        <img src={item.image} alt="" />

                                    </div> <h2 className="name">{item.name.slice(0, 30)}...</h2>
                                    <div className="next__card-bottom">
                                        <h3 className="kond" >{"Price: " + item.kond}</h3>
                                        <h3 className="price">{"Discount:" + item.price}</h3>
                                        <h3 className="month">{item.month + "/12"}</h3>
                                        <div className="commentimg"><img src={CommentImg} alt="" />{item.feedback}</div>
                                        <div className="Buy"><button className="buy">Buy</button></div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </React.Fragment>
    );
}

export default Next;
