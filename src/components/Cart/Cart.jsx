import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css'
import { Link, useNavigate } from 'react-router-dom'
import { createBuyOrder } from '../../services/firestore'

function Cart() {
    const { cart, deleteItem,  getItemPrice } = useContext(CartContext)
    const navigate = useNavigate()

    const handleCheckout = () => {
        const orderData = {
            buyer: {
                name: "agustin",
                phone: "19288912",
                email: "agus.rojasmolina@gmail.com"
            },
            items: cart,
            date: new Date(),
            total: getItemPrice()
        }
        createBuyOrder(orderData).then( orderid => {
            navigate(`/checkout/${orderid}`)
        })
        .catch((error) => {
            console.log(error);
          })
    }

    return (
        <div className='cart__container'>
            <div className='cart__inner'>
                
                <div className='cart__itemlist-container'>
                    <div className='cart__item-container'>
                        <div className="cart__image-box">
                            
                        </div>
                        <div className="cart__name-box">
                            <h3 className="nombre--producto">Nombre</h3>
                        </div>
                        <div className="cart__quantity-box">
                            <p>Cantidad</p>
                        </div>
                        <div className="cart__price-box">
                            <p>Precio</p>
                        </div>
                        <div className="cart__remove">
                            
                        </div>
                    </div>
                    { (cart.length === 0) ? <h2>Carrito vacío</h2> :
                        cart.map((item) => {
                            return (
                                <div className='cart__item-container' key={item.id}>
                                    <div className="cart__image-box">
                                        <img src={item.img} width='45rem' alt='item'></img>
                                    </div>
                                    <div className="cart__name-box">
                                        <h3 className="nombre--producto">{item.title}</h3>
                                    </div>
                                    <div className="cart__quantity-box">
                                           <p>{item.cantidad}</p>
                                    </div>
                                    <div className="cart__price-box">
                                        <p>${(item.price * item.cantidad).toLocaleString()}</p>
                                    </div>
                                    <div className="cart__remove">
                                        <button className="btn btn--quitar--producto"  onClick={() => deleteItem(item.id)}>Quitar producto</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                { (cart.length === 0) ? 
                    <div className='cart__checkout-container'>
                        <div className='cart__goback-container'>
                            <Link to="/"><button>Regresar a la tienda</button></Link>
                        </div>
                    </div> :
                    <div className='cart__checkout-container'>
                        <div className='cart__checkout-total'>
                            <h2>Subtotal:</h2>
                            <h3>{getItemPrice()}</h3>
                            <h2>Total (más envío):</h2>
                            <h2>{getItemPrice() + 4990}</h2>
                        </div>
                        <div className='cart__btns'>
                            
                            <div className='cart__goback-container'>
                                <Link to="/"><button>Regresar a la tienda</button></Link>
                            </div>  
                            <button onClick={handleCheckout}>Terminar mi compra</button>  
                        </div>  
                    </div>
                }
            </div>

        </div>
    )
}

export default Cart