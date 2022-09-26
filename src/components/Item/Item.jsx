import "./Item.css"
import Addtocart from "../Addtocart/Addtocart"
function Item(props){
    let {price, title, img, } = props
    return (
        <div className="card-container">
            <div className="card-outer">
                <div className="card-inner">
                    <div className="card__image-container">
                        <img className="card__image" src={img} alt="card img" />
                    </div>
                    <h2 className="card__title">{title}</h2>
                    <h3 className="card__price">{price}</h3>
                    <Addtocart stock="5" initial="1" />
                </div>
                
            </div>
        </div>
    )
}
export default Item