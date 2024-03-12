import React from 'react'
import { useGetComputers } from '../../redux/servise/computers-api'
import NetflixLoader from '../../components/skletons/skleton'
import { Cards } from '../../components/cart/products'

export const Computers = () => {
    const {data, isLoading} = useGetComputers()
  return (
    <div className='container'>
            {!isLoading ?
                <div className='flex items-center justify-between gap-[48px] flex-wrap mt-[20px]'>
                    {
                        data?.map((item) => <Cards key={item.id} {...item} />)
                    }
                </div> :
                <NetflixLoader />
            }
        </div>
  )
}
