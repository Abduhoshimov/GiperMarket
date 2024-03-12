import React from 'react'
import { useGetNotebooks } from '../../redux/servise/notebook-api'
import { NotebooksCard } from './components/NotebooksCard'
import NetflixLoader from '../../components/skletons/skleton'

export const Notebook = () => {
    const { data, isLoading } = useGetNotebooks()
    return (
        <div className='container '>
            {!isLoading ?
                <div className='flex items-center justify-between gap-[48px] flex-wrap mt-[20px]'>
                    {
                        data?.map((item) => <NotebooksCard key={item.id} {...item} />)
                    }
                </div> :
                <NetflixLoader />
            }
        </div>
    )
}
