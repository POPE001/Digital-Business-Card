import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Photo from "./components/Photo"
import Name from "./components/Name"
import Buttons from "./components/Buttons"
import About from "./components/About"
import Footer from "./components/Footer"





ReactDOM.render(
    <>
    <Photo />
    <App />
    <Name />
    <Buttons />
    <About />
    <Footer />
    </>
    , document.getElementById("root"))