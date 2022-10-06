import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';
import Itemdetailcontainer from './components/Itemdetailcontainer/Itemdetailcontainer'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import brazo from './assets/brazo.png'
import MyProvider from './context/CartContext';

function App() {
    return (
            <BrowserRouter>

                 <div className='app__container'>
                    <MyProvider>
                        <Header />
                        <Routes> 
                            <Route path="/" element={ < Itemlistcontainer />}/>
                            <Route path="/category/:cat" element={ < Itemlistcontainer />}/>
                            <Route path="/type/:type" element={ < Itemlistcontainer />}/>
                            <Route path="/producto/:id" element={< Itemdetailcontainer />}/>
                            <Route path="/cart" element={ <h2>cart</h2>} />
                        </Routes>
                        <div className='app__brazo-container'>
                            <img src={brazo} alt="brazo de hojas" className='app__brazo-logo'></img>
                            <h2 className='app__brazo-text'>Tómate la B12!💛</h2>
                        </div>
                    </MyProvider>
                </div>
                <Footer/>
            </BrowserRouter>
    );
}

export default App;
