import React, { useState } from 'react'
import { StarIcon } from '../../../assets/icon/star-icon'
import { HeartIcon } from '../../../assets/icon/heart-icon'
import { HeartIconRed } from '../../../assets/icon/heart-icon-red'
import { useGetAll } from '../../../redux/servise/All-api'
import { addLike, deleteLike } from '../../../redux/reducer/like'
import { useDispatch } from 'react-redux'

export const SingleCards = ({ img, title, rame, color, price, id, ram, geForce, core, memory, display, brand }) => {
    const [heart, setHeart] = useState(false)
    const dispatch = useDispatch()

    const { data } = useGetAll()
    const filteredProduct = data?.filter((item) => item.id === id);

    const changeStateTrue = () => {
        setHeart(true);
        dispatch(addLike(...filteredProduct))
    }
    const changeStateFalse = () => {
        setHeart(false)
        dispatch(deleteLike(...filteredProduct))
    }

    return (
        <div className='mb-[50px]'>
            <h1 className='text-carbon font-Jost text-[24px] font-semibold leading-9 mb-[20px]'>{title}</h1>
            <div className='flex items-center gap-[36px] mb-[15px]'>
                <div className='flex items-center gap-[10px]'>
                    <StarIcon />
                    <p className='text-green font-Jost text-base font-normal leading-normal'>(0)</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                    {
                        !heart ?
                            <div onClick={changeStateTrue}>
                                <HeartIcon />
                            </div> :
                            <div onClick={changeStateFalse}>
                                <HeartIconRed />
                            </div>
                    }
                    <p className='text-carbon font-Jost text-base font-normal leading-normal'>В избранное</p>
                </div>
            </div>
            <hr />
            <div className='flex  justify-between '>
                <div className='mt-[24px] flex gap-[32px]'>
                    <div>
                        <img className='w-[435px] h-[435px] ' src={img} alt="" />
                    </div>
                    <div className='mt-[50px]'>
                        <p className={` ${rame ? "text-carbon text-[16px]  font-medium leading-[20px] mb-[8px]" : 'hidden'}`}>Объем памяти</p>
                        <p className={`py-[8px] px-[10px] w-[100px] border-[2px] border-solid border-vermilionCinnabar mb-[24px] ${rame ? "" : 'hidden'} `}>{rame ? rame : ""}</p>

                        <p className='text-carbon text-[18px] font-medium leading-[20px] mb-[16px]'>Характеристики</p>

                        <p className={`text-carbon text-[18px] font-normal leading-[20px] mb-[12px] ${filteredProduct?.details ? "" : 'hidden'}`}> <span className='text-BasaltGrey font-Jost text-[16px] font-normal leading-[20px]'>Display: </span> {filteredProduct?.details ? filteredProduct[0]?.details?.display : ""} </p>
                        <p className={`${filteredProduct?.details ? "text-carbon text-[16px]  font-medium leading-[20px] mb-[8px]" : "hidden"}`}> <span className='text-BasaltGrey font-Jost text-[16px] font-normal leading-[20px]'>Частота: </span> {filteredProduct?.details ? filteredProduct[0]?.details?.frequency : ""} </p>
                        <p className={`${filteredProduct?.details ? "text-carbon text-[16px]  font-medium leading-[20px] mb-[8px]" : "hidden"}`}> <span className='text-BasaltGrey font-Jost text-[16px] font-normal leading-[20px]'>Масса: </span> {filteredProduct?.details ? filteredProduct[0]?.details?.weight : ""} </p>

                        <p className={`text-carbon text-[18px] font-normal leading-[20px] mb-[12px] ${color ? '' : 'hidden'}`}><span className='text-BasaltGrey font-Jost text-[16px] font-normal leading-[20px]'>Цвет: </span>{color ? color : ""}</p>

                        <p className={`text-carbon text-[18px]  font-normal leading-[20px] mb-[12px] ${rame ? "" : 'hidden'}`}><span className="text-BasaltGrey font-Jost text-[16px] font-normal leading-[20px] ">оперативная память: </span>{rame?.slice(0, 1)}GB</p>

                        <p className={`text-carbon text-[18px]  font-normal leading-[20px] mb-[12px] ${rame ? "" : 'hidden'}`}><span className={`text-BasaltGrey font-Jost text-[16px] font-normal leading-[20px] ${rame ? "" : 'hidden'}`}>память: </span>{rame?.slice(2, 6)}GB</p>

                        <p className={`text-carbon text-[18px]  font-normal leading-[20px] mb-[12px] ${display ? "" : 'hidden'}`}><span className={`text-BasaltGrey font-Jost text-[16px] font-normal leading-[20px] ${display ? "" : 'hidden'}`}>Display: </span>{display}GB</p>
                        <p className={`text-carbon text-[18px]  font-normal leading-[20px] mb-[12px] ${ram ? "" : 'hidden'}`}><span className={`text-BasaltGrey font-Jost text-[16px] font-normal leading-[20px] ${ram ? "" : 'hidden'}`}>оперативная память: </span>{ram?.slice(0, 2)}GB</p>
                        <p className={`text-carbon text-[18px]  font-normal leading-[20px] mb-[12px] ${geForce ? "" : 'hidden'}`}><span className={`text-BasaltGrey font-Jost text-[16px] font-normal leading-[20px] ${geForce ? "" : 'hidden'}`}>geForce: </span>{geForce}GB</p>
                        <p className={`text-carbon text-[18px]  font-normal leading-[20px] mb-[12px] ${core ? "" : 'hidden'}`}><span className={`text-BasaltGrey font-Jost text-[16px] font-normal leading-[20px] ${core ? "" : 'hidden'}`}>Core: </span>{core}GB</p>
                        <p className={`text-carbon text-[18px]  font-normal leading-[20px] mb-[12px] ${memory ? "" : 'hidden'}`}><span className={`text-BasaltGrey font-Jost text-[16px] font-normal leading-[20px] ${memory ? "" : 'hidden'}`}>память: </span>{memory?.slice(0, 4)}GB</p>

                        <p className={`text-carbon text-[18px]  font-normal leading-[20px] mb-[12px] ${brand ? "" : 'hidden'}`}><span className={`text-BasaltGrey font-Jost text-[16px] font-normal leading-[20px] ${brand ? "" : 'hidden'}`}>Brand: </span>{brand}</p>


                        <p className='text-carbon text-[18px]  font-normal leading-[20px] mb-[12px]'><span className='text-BasaltGrey font-Jost text-[16px] font-normal leading-[20px]'>беспроводные интерфейсы:  </span> NFC, Wi-Fi, Bluetooth 5.0</p>

                        <p className='text-vermilionCinnabar text-[16px] font-medium leading-[24px] mt-[10px]'>Все характеристики</p>
                    </div>
                </div>
                <div className='w-[340px] h-[167px] border-[2px] border-solid border-WhiteEdgar pt-[45px] pb-[17px] px-[16px] mt-[30px]'>
                    <h2 className='text-carbon text-[34px] font-semibold leading-[44px] mb-[21px]'>{price} Сум</h2>
                    <button className='text-center bg-aureolin w-full py-[6px]'>В корзину</button>
                </div>
            </div>
        </div>
    )
}
