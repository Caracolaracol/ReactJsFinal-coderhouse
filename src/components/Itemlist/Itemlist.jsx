import {useState} from 'react'
import Item from "../Item/Item"
import getItems from "../../services/mockAPI"
import './Itemlist.css'

function Itemlist(){
    let [data, setData] = useState([])
    getItems().then( (respuestaDatos) => {
        setData(respuestaDatos) 
    })


    return(
        <div className="item-list__inner">
            {
            data.map((item)=> {
                return (
                    <Item
                        key={item.id}
                        price={item.price}
                        title={item.title}
                        detail={item.detail}
                        img={item.img}
                    />
                )
            })
            }
        </div>
    )
}

export default Itemlist