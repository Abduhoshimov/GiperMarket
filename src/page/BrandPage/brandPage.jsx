import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAll } from '../../redux/servise/All-api';
import { TelCards } from '../Tel/components/TelCards';
import { nanoid } from 'nanoid';

export const BrandPage = () => {
    const { data } = useGetAll()
    const brand = useParams();
    const phone = brand;


    const filtered = data?.filter(product => product?.brand === phone.brand);

    return (
        <div className='container'>
            <div className='flex items-center justify-between gap-[20px] flex-wrap'>
                {
                    data?.map((item) => item?.brand && item?.brand === phone.brand ? <TelCards key={item.id} {...item} /> : undefined)
                }
            </div>
        </div>
    )
}
