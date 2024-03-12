import React from 'react'
import { HeartIcon } from '../../../assets/icon/heart-icon'
import { KorzinkaIcon } from '../../../assets/icon/korzinka-icon'
import { HeartIconRed } from '../../../assets/icon/heart-icon-red'

export const NotebooksCard = ({img, title, price}) => {
    const [heart, setHeart] = React.useState(false)

    const changeStateTrue = () => {
        setHeart(true);
    }
    const changeStateFalse = () => {
        setHeart(false)
    }
    return (
        <div className='w-[214px] pt-[4px] pb-[15px] pl-[4px] pr-[16px]'>
            <div className='flex'>
                <img className='w-[165px]' src={img} alt="img" />

                {
                    !heart ?
                        <div className='mt-[30px]' onClick={changeStateTrue}>
                            <HeartIcon />
                        </div> :
                        <div className='mt-[30px]' onClick={changeStateFalse}>
                            <HeartIconRed />
                        </div>
                }
            </div>
            <h2 className='text-carbon text-[16px] font-normal leading-[24px] mb-[10px] mt-[14px]'>{title.slice(0,30)}</h2>
            <div className='flex items-center justify-between'>
                <p className='text-carbon text-[16px] font-bold leading-[24px]'>{price} Сум</p>
                <KorzinkaIcon />
            </div>
        </div>
    )
}
