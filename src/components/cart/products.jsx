import React, { useState } from 'react'
import { HeartIcon } from '../../assets/icon/heart-icon'
import { KorzinkaIcon } from '../../assets/icon/korzinka-icon'
import { HeartIconRed } from '../../assets/icon/heart-icon-red'
import { Link } from 'react-router-dom'

export const Cards = ({ img, title, price,id }) => {
    const [heart, setHeart] = useState(false)

    const changeStateTrue = () => {
        setHeart(true);
    }
    const changeStateFalse = () => {
        setHeart(false)
    }
    return (
        <div className='w-[214px] pt-[4px] pb-[15px] pl-[4px] pr-[16px]'>
            <div className='flex'>
                <Link to={`/single-product/${id}`}><img className='w-[165px] h-[165px] ' src={img} alt="img" /></Link>

                {
                    !heart ?
                        <div className='mt-[14px]' onClick={changeStateTrue}>
                            <HeartIcon />
                        </div> :
                        <div className='mt-[14px]' onClick={changeStateFalse}>
                            <HeartIconRed />
                        </div>
                }
            </div>
            <h2 className='text-carbon text-[16px] font-normal leading-[24px] mb-[10px] mt-[14px]'>{title.slice(0, 30)}</h2>
            <div className='flex items-center justify-between'>
                <p className='text-carbon text-[18px] font-bold leading-[24px]'>{price} Сум</p>
                <KorzinkaIcon />
            </div>
        </div>
    )
}
