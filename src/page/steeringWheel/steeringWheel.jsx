import React from 'react'
import { useGetSteeringWheel } from '../../redux/servise/rul-api'
import { Cards } from '../../components/cart/products'
import NetflixLoader from '../../components/skletons/skleton'
import { Link } from 'react-router-dom'

export const SteeringWheel = () => {
    const { data, isLoading } = useGetSteeringWheel()
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
