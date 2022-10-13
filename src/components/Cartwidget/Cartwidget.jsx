import './Cartwidget.css';
import cartIcon from '../../assets/icons/cart.png'
import { useContext } from 'react' 
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
function Cartwidget() {
    const { cart } = useContext(CartContext)
    return ( 
        <Link to="./cart">
            <div className='cart-widget__container'>
                <div className='cart-widget__outer'>
                    <div className='cart-widget__inner'>
                        <div className='cart-widget__image'>
                            <img src={cartIcon} alt="carrito" />
                            <div className='cart-widget__counter'>
                                <h2>{cart.length}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Cartwidget;