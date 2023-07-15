import React from 'react'

import "./App.css";
//containers
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from "./containers"

//components
import {Article, Brand, CTA, Navbar} from "./components";

export default function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

// struttura del progetto

// components: piccole parti del progetto

// container: parti piu` grandi che hanno al loro interno i components