import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./home/home.jsx"
import Next from "./next/next.jsx"
import Navbar from './view/navbar'
import Category from './category/category.jsx'
import Category2 from './category2/category2'
import Category3 from './category3/category3'
import Category4 from './category4/category4'

function App() {
  const [word, setWord] = useState("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (!word == "") {
      setSearch(true)
    }
  }, [word])
  return (
    <>
      <Navbar setWord={setWord} />
      <Routes>
        <Route index element={<Home search={search} word={word} />} />
        <Route path='next' element={<Next search={search} word={word} />} />
        <Route path='category' element={<Category search={search} word={word} />} />
        <Route path='category2' element={<Category2 search={search} word={word} />} />
        <Route path='category3' element={<Category3 search={search} word={word} />} />
        <Route path='category4' element={<Category4 search={search} word={word} />} />
      </Routes>
    </>
  )
}

export default App
