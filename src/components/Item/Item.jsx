import "./Item.css"
import {Link} from 'react-router-dom'

function Item(props){
    let {price, title, img } = props

    const urlProducto = `/producto/${props.id}`

    return (
        <Link to={urlProducto}>
            <div className="card-container">
                <div className="card-outer">
                    <div className="card-inner">
                        <div className="card__image-container">
                            <img className="card__image" src={img} alt="card img" />
                        </div>
                        <h2 className="card__title">{title}</h2>
                        <h3 className="card__price">{price}</h3>
                        <div className="card__agotado-container">
                            <h4 className="card__agotado-text">Agotado</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Item