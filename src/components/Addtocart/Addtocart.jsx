import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './Addtocart.css'
import React, {useState} from 'react';
import icon from '../../assets/icons/addcart.png'
let cartCount = 0

function Itemcount(props) {
    let [count, setCount] = useState(parseInt(props.initial))
    
    function handleAdd() {
        if (count < props.stock) {
            setCount(count+1)
        }
    }

    function handleSubstract(){
        if (count > props.initial){
            setCount(count-1)
        }
    }

    function onAddToCart() {
        console.log('Agregados ' + count + ' items al carrito')
        cartCount = cartCount + 1
        console.log(cartCount)
    }
    return (
        <div className='item-count__container'>
            <div className="item-count__inner">
                <div className='item-count__minus'>
                    <button className='item-count__btn'><RemoveIcon onClick={handleSubstract}/></button>
                </div>
                <div className='item-count__number'>{count}</div>
                <div className='item-count__plus'>
                    <button className='item-count__btn'><AddIcon onClick={handleAdd} /></button>
                </div>
            </div>
            <div className='item-count__add-container'>
                <button className='item-count__btn-add' onClick={onAddToCart}>
                    <img className='item-count__cart-icon' src={icon} alt="carrito"/>agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default Itemcount