import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';
import Itemdetailcontainer from './components/Itemdetailcontainer/Itemdetailcontainer'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <div className='app__container'>
                <Header />
                <Routes>
                    <Route path="/" element={ < Itemlistcontainer />}/>
                    <Route path="/category/:cat" element={ < Itemlistcontainer />}/>
                    <Route path="/producto/:id" element={< Itemdetailcontainer />}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
