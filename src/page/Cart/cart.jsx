import React from 'react'
import { useSelector } from 'react-redux'
import { CartProduct } from './components/CartProduct'
import { loadState } from '../../lib/storage'


export const Cart = () => {
  const { cartItems } = useSelector((state) => state.todo);
  const localProducts = loadState("shoppingCards");
  const product = localProducts.todo.cartItems;
  return (
    <div>
      {
        product ? product?.map((item) => <CartProduct {...item} />) : undefined
      }
    </div>
  )
}
