import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';
import Itemdetailcontainer from './components/Itemdetailcontainer/Itemdetailcontainer'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div>
            <div>
                <Header />
                {/* <Itemlistcontainer /> */}
                <Itemdetailcontainer />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
