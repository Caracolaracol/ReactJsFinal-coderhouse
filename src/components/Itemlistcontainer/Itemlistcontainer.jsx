
import './Itemlistcontainer.css';
import Itemlist from "../Itemlist/Itemlist"
import brazo from '../../assets/brazo.png'



function Itemlistcontainer() {
    return (
        <div className="item-list__container">
            <main className="item-list__outer">
                
                <Itemlist/>
                <div className='app__brazo-container'>
                    <img src={brazo} alt="brazo de hojas" className='app__brazo-logo'></img>
                    <h2 className='app__brazo-text'>Tómate la B12!💛</h2>
                </div>
            </main>
        </div>
    )
} 

export default Itemlistcontainer