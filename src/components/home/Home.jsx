import React from 'react'
import Header from '../header/Header'
import Menu from '../menu/Menu'
import Works from '../works/Works'
import Gallery from '../gallery/Gallery'
import Question from '../question/Question'
import AboutUs from '../aboutUs/AboutUs'



const Home = () => {
  return (
    <>
    <Header/>
    <AboutUs/>
    <Menu/>
    <Works/>
    <Gallery/>
    <Question/>
    </>
  )
}

export default Home