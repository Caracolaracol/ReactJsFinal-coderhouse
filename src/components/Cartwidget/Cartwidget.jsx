import './Cartwidget.css';
import cartIcon from '../../assets/icons/cart.png'
import { useContext, useState } from 'react' 
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Popper from '@mui/material/Popper';
import '../Cart/Cart.css'
import Cartmini from '../Cart/Cartmini'

function Cartwidget() {
    const { cart } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
  
    function getCartNumber(){
        let number = cart.reduce((acc, el) => acc + el.cantidad, 0)
        console.log(number)
        return number
    }

    return ( 
        <div className='cart-widget__container-outer'>
            <div onMouseEnter={handleClick} onMouseLeave={handleClick} >
                <Link to="./cart"  className='cart-widget__container' >
                    {/* <div className='cart-widget__title'>
                            <h2>Mi Carrito</h2>
                        </div> */ }
                    <div className='cart-widget__outer'>
                        <div className='cart-widget__inner'>
                            <div className='cart-widget__image'>
                                <img src={cartIcon} alt="carrito" />
                                <div className='cart-widget__counter'>
                                    <h2>{getCartNumber()}</h2>
                                </div>
                                
                            </div>
                           
                        </div>
                    </div>
                </Link>
                <Popper placement="bottom-end" id={id} open={open} anchorEl={anchorEl} modifiers={[
    {
      name: 'flip',
      enabled: true,
      options: {
        altBoundary: true,
        rootBoundary: 'document',
        padding: 8,
      },
    },
    {
      name: 'preventOverflow',
      enabled: true,
      options: {
        altAxis: true,
        altBoundary: true,
        tether: true,
        rootBoundary: 'document',
        padding: 8,
      },
    },]} >
                    <Cartmini></Cartmini>
                </Popper>
            </div>
        </div>
    )
}

export default Cartwidget;