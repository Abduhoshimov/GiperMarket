import React from 'react'
import { useSelector } from 'react-redux';
import { loadState } from '../../lib/storage';
import { CartProduct } from '../Cart/components/CartProduct';
import { SingleCards } from '../SingleProduct/components/cards';

export const Favourite = () => {
  const { cartItems } = useSelector((state) => state.like);
  const localProducts = loadState("shoppingCards");
  const product = localProducts.like.likeItems;
  const length = product.length;
  return (
    <div className='container'>
      {
        product ? product?.map((item) => <SingleCards {...item} />) : undefined
      }
    </div>
  )
}
