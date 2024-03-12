import React from 'react'

export const CatalogCard = ({ img, text }) => {
    return (
        <div className='flex items-center gap-[16px]   '>
            <div className='flex items-center gap-[16px] py-[18px] px-[22px] rounded-[15px] bg-cascading-white'>
                <img className='w-[96px] h-[96px]' src={img} alt="img" />
                <p className='w-[97px] text-center'>{text}</p>
            </div>
        </div>
    )
}
