import './Cartwidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Cartwidget() {
    return (
        <div className='cart-widget__container'>
            <ShoppingCartIcon
                fontSize='large'
            />
            <div className='cart-widget__counter'>
                
            </div>
        </div>
    )
}

export default Cartwidget;