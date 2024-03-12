import React from 'react'
import { useGetTels } from '../../redux/servise/tel-api'
import { TelCards } from './components/TelCards'
import NetflixLoader from '../../components/skletons/skleton'
import { Link } from 'react-router-dom'

export const Tel = () => {
    const { data, isLoading } = useGetTels()
    return (
        <div className='container'>
            {!isLoading ?
                <div className='flex items-center justify-between gap-[48px] flex-wrap mt-[20px]'>
                    {
                        data?.map((item) => <Link to={`/single-product/${item.id}`}><TelCards key={item.id} {...item} /></Link>)
                    }
                </div> :
                <NetflixLoader />
            }
        </div>
    )
}
