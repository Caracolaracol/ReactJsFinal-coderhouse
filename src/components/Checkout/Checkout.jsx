import { useState, useContext  } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { createBuyOrder } from '../../services/firestore'
import './Checkout.css'

function Checkout(){
    const [dataForm, setDataForm] = useState({name:"", phone:"", email:""})
    const { cart, getItemPrice } = useContext(CartContext)
    const navigate = useNavigate()
    
    function inputChangeHandler(event) {
        let inputName = event.target.name
        let value = event.target.value

        const newDataForm = {...dataForm}
        newDataForm[inputName] = value
        setDataForm(newDataForm)
    } 

    function handleCheckout(event) {
        event.preventDefault()
        const orderData = {
            buyer: dataForm,
            items: cart,
            date: new Date(),
            total: getItemPrice()
        }
        console.log(orderData)
        createBuyOrder(orderData).then( orderid => {
            navigate(`/checkout/${orderid}`)
        })
        .catch((error) => {
            console.log(error);
          })
    }
    return (
        <div className='checkout__container'>
            <div className="form__container">
                <form onSubmit={handleCheckout} className="form">
                    <for className="form__item">
                        <label>
                            <h3>Nombre</h3>
                        </label>
                        <input 
                            value={dataForm.name}
                            onChange={inputChangeHandler}
                            name="name"
                            type="text"
                            placeholder='nombre'
                            required 
                        />
                    </for>
                    <div className="form__item">
                        <label>
                            <h3>Telefono</h3>
                        </label>
                        <input 
                            value={dataForm.phone}
                            onChange={inputChangeHandler}
                            name="phone"
                            type="text"
                            placeholder='telefono'
                            required 
                        />
                    </div>
                    <div className="form__item">
                        <label>
                            <h3>E-mail</h3>
                        </label>
                        <input 
                            value={dataForm.email}
                            onChange={inputChangeHandler}
                            name="email"
                            type="text"
                            placeholder='email'
                            required 
                        />
                    </div>
                    <div className='form__btn-container'>
                        <button type="submit" onClick={handleCheckout} className='btn'><h3>Finalizar Compra</h3></button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Checkout