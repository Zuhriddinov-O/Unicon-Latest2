import React from "react";
import './home.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
// import slidetv4 from "../imgforcat1/slidetv4.jpg"


import slidewatch from "../imgforcat1/slidewatch.jpg"
import slidewatch2 from "../imgforcat1/slidewatch2.jpg"
import slidewatch3 from "../imgforcat1/slidewatch3.jpg"
// import slidewatch4 from "../imgforcat1/slidewatch4.jpg"

import CommentImg from '../images/comment.png'
import { allData } from "../all/all";


import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = (props) => {

  return (
    <>   
      <React.Fragment>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="slideimg1">
              <img className="slide" src={slideair} alt="" />
              <img className="slide" src={slideair2} alt="" />
              <img className="slide" src={slideair3} alt="" />
              {/* <img className="slide" src={slideair4} alt="" /> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slideimg1">
              <img className="slide" src={slidebook} alt="" />
              <img className="slide" src={slidebook2} alt="" />
              <img className="slide" src={slidetoy} alt="" />
              {/* <img className="slide" src={slidetoy2} alt="" /> */}
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slideimg1">
              <img className="slide" src={slidetv} alt="" />
              <img className="slide" src={slidetv2} alt="" />
              <img className="slide" src={slidetv3} alt="" />
              {/* <img className="slide" src={slidetv4} alt="" /> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slideimg1">
              <img className="slide" src={slidewatch} alt="" />
              <img className="slide" src={slidewatch2} alt="" />
              {/* <img className="slide" src={slidewatch2} alt="" /> */}
              <img className="slide" src={slidewatch3} alt="" />
              {/* <img className="slide" src={slidewatch4} alt="" /> */}
            </div>
          </SwiperSlide>
        </Swiper>
        <div key={"home"} className="items">
          {allData.map((item) => {
            if (props.search === false) {
              return (
                <div className="home__card">
                  <div className="home__container">
                    <div className="home__card-top" >
                      <img src={item.image} alt="" />

                    </div> <div className="items_name"><h2 className="name">{item.name.slice(0, 23)}...</h2></div>
                    <div className="home__card-bottom">
                      <h3 style={{textDecoration:"line-through red"}} className="kond" >{"Price: " + item.kond}</h3>
                      <h3 style={{textDecoration:"none"}} className="price">{"Discount:" + item.price}</h3>
                      <h3 className="month">{item.month + "/12"}</h3>
                      <div style={{width:"auto"}} className="commentimg"><img src={CommentImg} alt="" />{item.feedback}</div>
                      <div className="Buy"><button className="buy">Buy</button></div>
                    </div>
                  </div>
                </div>
              )
            } else if (item.name.toLowerCase().includes(props.word.toLowerCase())) {
              return (
                <div className="home__card">
                  <div className="home__container">
                    <div className="home__card-top" >
                      <img src={item.image} alt="" />

                    </div> <h2 className="name">{item.name.slice(0, 30)}...</h2>
                    <div className="home__card-bottom">
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
      </React.Fragment>  </>
  );

}
export default Home;
// export default function App()
{/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}