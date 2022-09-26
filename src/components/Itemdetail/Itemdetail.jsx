import Addtocart from '../Addtocart/Addtocart'
import './Itemdetail.css'
import shipcar from '../../assets/icons/shipcar.png'
import card from '../../assets/icons/card.png'
function Itemdetail(props) {
    return ( 
        <div className='item-detail__outer'>
            <div className="item-detail__inner">
                <div className="item-detail__title-container">
                    <h1 className='item-detail__title'>
                        {props.title}
                    </h1>
                </div>   
                <div className="item-detail__image-container">
                    <img className="item-detail__image" src={props.img} alt={props.title} />
                </div>
                <div className="item-detail__detail-container">
                    <p>
                        {props.detail}
                    </p>
                </div>
                <div className="item-detail__sales-data">
                    <h2 className='item-detail__price'>${props.price}</h2>
                    <p className='item-detail__envios-p'>Evíos a todo Chile mediante Starken o Correos de Chile sólo en casos donde Starken no tiene cobertura.</p>
                    <div>
                        <img src={card} alt="card" width={60}/>
                    </div>
                    <p className='item-detail__envios-p'>Las compras realizadas a través del sitio serán despachadas dentro de 48 hrs hábiles después del pago</p>
                    <div>
                        <img src={shipcar} alt="car" width={60}/>
                    </div>
                    <div className='flex-stock'>
                        <h4>Stock disponible:</h4>
                        <div className='item-detail__stock-container'>
                            <h4> {props.stock}</h4>
                        </div>
                        <h4 className='item-detail__stock-empty'>Producto Agotado </h4>
                    </div>

                    <div className='item-detail__itemcount'>
                        <Addtocart stock="5" initial="1"/>
                    </div>
                </div>
            </div>
            <div className='item-detail__extra-detail'>
                <div>
                    <h3>Ingredientes: </h3>
                    <p className='item-detail__detail-p'>{props.ingredientes}</p> 
                </div>

                <div>
                    <img class="item-detail__image-amino" src={props.imgaminograma} alt="aminograma"/>
                </div>
            </div>
            <div className='item-detail__extra-detail2'>
                <div>
                    <img class="item-detail__image-nutri" src={props.imgnutri} alt="informacionnutricional" width={280}/>
                </div>
                <div>
                    <h3>Modo de uso: </h3>
                    <p className='item-detail__detail-p'>{props.extradetail}</p>
                </div>
                

            </div>
        </div> 
    )
}

export default Itemdetail