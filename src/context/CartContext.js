import useState from 'react'
import {createContext } from 'react'

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id) // some, indica si el producto ya existe en cart o no
    }
    const addItem = () => {}
    const emptyCart  = () => {
        return setCart([])
    }
    const deleteItem  = (id) => {
        return setCart(cart.filter(prod => prod.id !== id))
    }
    const getItemQty  = () => {
        return cart.reduce((acc, x) => acc += x.cantidad, 0) //obtener la cantidad de unidades que tiene nuestro carrito, el cero es el valor inicial
    }
    const getItemPrice  = () => {
        return cart.reduce((acc, x) => acc += x.price * x.cantidad, 0)
    }
    
    return <Provider value={{isInCart, addItem, emptyCart, deleteItem, getItemPrice, getItemQty}}>{children}</Provider>
}

export default MyProvider