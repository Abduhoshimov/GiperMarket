import React, { useEffect, useState } from 'react'
import { HeartIcon } from '../../../assets/icon/heart-icon'
import { KorzinkaIcon } from '../../../assets/icon/korzinka-icon'
import { HeartIconRed } from '../../../assets/icon/heart-icon-red'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../../../redux/reducer/todo';
import { addLike, deleteLike } from '../../../redux/reducer/like'
import { useGetAll } from '../../../redux/servise/All-api'

export const TelCards = ({ img, title, price, id }) => {
    const dispatch = useDispatch()
    const [heart, setHeart] = useState(false)
    const { data } = useGetAll()

  
    const filteredProduct = data?.filter((item) => { return item.id == id });

    const changeStateTrue = () => {
        setHeart(true);
        dispatch(addLike(...filteredProduct))
    }
    const changeStateFalse = () => {
        setHeart(false)
        dispatch(deleteLike(...filteredProduct))
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(add(...filteredProduct))
        console.log(`aded`);
    }

    return (
        <div className='w-[214px] pt-[4px] pb-[15px] pl-[4px] pr-[16px]'>
            <div className='flex'>
                <Link to={`/single-product/${id}`}><img className='w-[165px] h-[165px]' src={img} alt="img" /></Link>

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
            <h2 className='text-carbon text-[16px] font-normal leading-[24px] mb-[10px] mt-[14px]'>{title?.slice(0, 30)}</h2>
            <div className='flex items-center justify-between'>
                <p className='text-carbon text-[18px] font-bold leading-[24px]'>{price} Сум</p>
                <div onClick={submit}>
                    <KorzinkaIcon />
                </div>
            </div>
        </div>
    )
}
