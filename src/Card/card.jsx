import * as React from 'react';
import { useEffect, useState, } from 'react'
import './card.css'
import Good1 from '../images/navbarimg/flowerpot.webp'
import baricon from '../images/baricon.png'


const MainCard = (props) => {
  // let data = [
  //   { id: 1, name: "Lorem ipsum ", text: "something " },
  //   { id: 2, name: "explicabo mo", text: "something " },
  //   { id: 3, name: "eligendi vol", text: "something " },
  //   { id: 4, name: "Quia consequ", text: "something " },
  //   { id: 5, name: "exercitation", text: "something " },
  // ]
  // const [word, setWord] = useState("");
  // const [search, setSearch] = useState(false);

  // useEffect(() => {
  //   if (!word == "") {
  //     setSearch(true)
  //   }
  // }, [word])
  const [count, setCount] = useState(0)

  // const [count, setCount] = useState(0)




  return (
    <>
      <React.Fragment>
        <div className="Card">

          <div className="cardinit">
            <div className="image"><img src={Good1} alt="" />
            </div>
            <div className="heart-like-button"></div>

            <div className="baricon"><img src={baricon} alt="" />

            </div>
          </div>
          <div className="p"><p>Paragraph</p></div>
          <div className="text"><h3>Factory Customization <br /> Luxury Wholescale Indoors
            <div className="cost">cost: $2.00-$2.23</div>
          </h3></div>
          <div className="home">
            <div className="button">
              <button onClick={() => setCount((count) => count + 1)}>How many? {count}</button></div>
            {/* 
            <h1>App.jsx</h1>
            <input type="search" placeholder="Search..." onChange={(e) => setWord(e.target.value)} />
            {data.map((item) => {
              if (search === false) {
                return (
                  <h1 key={item.id}>{item.id}//{item.name}</h1>
                )
              } else if (item.name.toLowerCase().includes(word.toLowerCase())) {
                return (
                  <h1 key={item.id} >{item.id} {item.name}</h1>
                )
              }
              else if (String(item.id).toLowerCase().includes(word.toLowerCase())) {
                return (
                  <h1 key={item.id} >{item.id} {item.name}</h1>
                )
              }
            })} */}
          </div>
        </div>
      </React.Fragment>

    </>

  );

}

export default MainCard;