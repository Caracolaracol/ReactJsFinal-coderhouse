import React, { useState, useEffect } from 'react'
import './Itemdetailcontainer.css'
import Itemdetail from '../Itemdetail/Itemdetail'
import { getSingleItem } from '../../services/mockAPI'
import {useParams} from 'react-router-dom'


function Itemdetailcontainer() {
    let [data, setData] = useState({}); 
    const params = useParams()
    const id = params.id
    useEffect(() => {
        getSingleItem(id).then((respuestaDatos) => setData(respuestaDatos))
    }, []) 


    return (
        <div className='item-detail__container'>
            <Itemdetail
                id={data.id}
                title={data.title}
                detail={data.detail}
                img={data.img}
                stock={data.stock}
                price={data.price}
                ingredientes={data.ingredientes}
                extradetail={data.extradetail}
                imgaminograma={data.imgaminograma}
                imgnutri={data.imginfonutri}
                />
        </div> 
    )
}
export default Itemdetailcontainer