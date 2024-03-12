import React from 'react'
import { useGetwashingM } from '../../redux/servise/washingM-api'
import { Cards } from '../../components/cart/products'
import NetflixLoader from '../../components/skletons/skleton'
import { Link } from 'react-router-dom'

export const WashingM = () => {
    const { data, isLoading } = useGetwashingM()
    return (
        <div className='container'>
            {!isLoading ?
                <div className='flex items-center justify-between gap-[48px] flex-wrap mt-[20px]'>
                    {
                        data?.map((item) =><Link to={`/single-product/${item.id}`}><Cards key={item.id} {...item} /></Link>)
                    }
                </div> :
                <NetflixLoader />
            }
        </div>
    )
}
