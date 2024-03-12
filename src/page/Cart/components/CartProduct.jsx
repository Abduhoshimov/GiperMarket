import React, { useState } from 'react'
import { useGetAll } from '../../../redux/servise/All-api'
import { loadState, saveState } from '../../../lib/storage';
import { HeartIcon } from '../../../assets/icon/heart-icon';
import { HeartIconRed } from '../../../assets/icon/heart-icon-red';
import { useDispatch } from 'react-redux';
import { addLike, deleteLike } from '../../../redux/reducer/like';
import { deleteItem } from '../../../redux/reducer/todo';
let count = 0;

export const CartProduct = ({ id, title, img, price, rame }) => {
    if (id) {
        count += 1;
    }
    const localProducts = loadState("shoppingCards");
    const product = localProducts.todo.cartItems;

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

    const deleteProduct = () => {
        dispatch(deleteItem(...filteredProduct))
    }

    return (
        <div className='container'>
            <div className='flex w-[900px] mt-[20px] mb-[20px] gap-4'>
                <div className='w-[200px] h-[200px] '>
                    <img className='object-contain' src={img} alt="" />
                </div>
                <div className='bg-white'>
                    <div className='flex items-center w-[600px] justify-between'>
                        <h1 className='text-carbon mt-[15px] font-jost text-[24px] font-medium leading-[36px]'>{title?.slice(0,30)}</h1>
                        <p className='text-carbon mt-[15px] font-jost text-[24px] font-medium leading-[36px]'>{price} Сум</p>
                    </div>
                    <p className={`${rame ? "text-carbon mb-[20px] font-jost text-[16px] font-normal leading-[28px]" : "hidden"}`}>({rame?.slice(2, 7)})</p>

                    <div className='flex items-center mt-[20px] gap-[30px]'>
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
                        <div>
                            <button onClick={deleteProduct} className='text-carbon text-center font-jost text-base font-normal leading-6'>Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
