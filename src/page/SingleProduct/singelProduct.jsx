import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetAll } from '../../redux/servise/All-api';
import { SingleCards } from './components/cards';

export const SingelProduct = () => {
    const { id } = useParams();
    const targetId = parseInt(id)
    const { data, isLoading } = useGetAll();

    const filteredProduct = data?.filter((item) => item.id === targetId);

    return (
        <div className='container mt-[36px] mb-[64px]'>
            {
                !isLoading ?
                    <div>
                        {
                            filteredProduct?.map((item) => <SingleCards key={item.id} {...item} />)
                        }
                    </div> :

                    <div className="flex gap-4 items-center w-52">
                        <div>
                            <div className="skeleton h-[36px] w-[446px] mb-[20px]"></div>
                            <div className='flex items-center gap-[36px] my-[20px]'>
                                <div className="skeleton h-[20px] w-[140px] mb-[20px]"></div>
                                <div className="skeleton h-[20px] w-[140px] mb-[20px]"></div>
                            </div>
                            <div className="skeleton h-[435px] w-[435px] "></div>
                        </div>

                        <div className='ml-[20px] mt-[108px]'>
                            <div className="skeleton h-[20px] w-[110px] mb-[20px]"></div>
                            <div className="skeleton h-[33px] w-[76px] mb-[24px]"></div>
                            <div className="skeleton h-[20px] w-[128px] mb-[20px]"></div>
                            <div className="skeleton h-[20px] w-[98px] mb-[20px]"></div>
                            <div className="skeleton h-[20px] w-[200px] mb-[20px]"></div>
                            <div className="skeleton h-[20px] w-[170px] mb-[20px]"></div>
                            <div className="skeleton h-[20px] w-[98px] mb-[20px]"></div>
                            <div className="skeleton h-[20px] w-[120px] mb-[20px]"></div>
                            <div className="skeleton h-[20px] w-[300px] mb-[20px]"></div>
                            <div className="skeleton h-[20px] w-[150px] mb-[20px]"></div>
                        </div>
                    </div>
            }
        </div>
    )
}
