import {useEffect, useState} from 'react'
import Item from "../Item/Item"
import getItems from "../../services/mockAPI"
import './Itemlist.css'
import {useParams} from 'react-router-dom'
import { getItemsByCategory } from '../../services/mockAPI'

function Itemlist(){
    let [data, setData] = useState([])
    let { cat } = useParams()

    useEffect(()=> {
        if(cat === undefined ) {
            getItems().then( (respuestaDatos) => setData(respuestaDatos))
        } else {
            getItemsByCategory(cat).then((respuestaDatos) =>  setData(respuestaDatos))
        }
    }, [cat])
    


    return(
        <div className="item-list__inner">
            {
            data.map((item)=> {
                return (
                    <Item
                        id={item.id}
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