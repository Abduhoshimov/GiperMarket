import React from 'react'

export const TelCard = ({ img, title, price }) => {
  return (
    <div className='flex gap-[16px]'>
        <img className='w-[140px] h-[140px]' src={img} alt="img" />
        <div>
            <h3 className='mb-[60px] mt-[20px] text-carbon text-[20px] font-normal leading-normal'>{title.slice(0,30)}</h3>
            <p className='mb-[40px] text-black text-[20px] font-medium leading-[28px]'>{price} Сум</p>
        </div>
    </div>
  )
}
