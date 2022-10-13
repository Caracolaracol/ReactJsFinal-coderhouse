import {useEffect, useState} from 'react'
import Item from "../Item/Item"
import { getItems, getItemsByCategory, getItemsByType } from "../../services/firestore"
import './Itemlist.css'
import {useParams} from 'react-router-dom'

import Loader from '../Loader/Loader'
 
function Itemlist(){
    let [data, setData] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    let { cat, type } = useParams()


    useEffect(()=> {
        if(cat === undefined ) {
            getItems()
                .then( (respuestaDatos) => setData(respuestaDatos))
                .finally(() => setIsLoading(false))
        } else {
            getItemsByCategory(cat)
                .then((respuestaDatos) =>  setData(respuestaDatos))
                .finally(() => setIsLoading(false))
        }
    }, [cat])

    useEffect(()=> {
        if(type === undefined ) {
            getItems()
            .then( (respuestaDatos) => setData(respuestaDatos))
            .finally(() => setIsLoading(false))
        } else {
            getItemsByType(type)
                .then((respuestaDatos) =>  setData(respuestaDatos))
                .finally(() => setIsLoading(false))
        }
    }, [type])
    
    

    return(
        <div className="item-list__inner">
            {isLoading && <Loader/>}
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
                        stock={item.stock}
                    />
                )
            })
            }
            
        </div>
    )
}

export default Itemlist