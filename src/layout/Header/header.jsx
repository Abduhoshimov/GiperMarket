import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TelIcon } from '../../assets/icon/tel-icon'
import logo from "../../assets/img/Logo.png";
import { MenuIcon } from '../../assets/icon/menu-icon';
import { SearchIcon } from '../../assets/icon/search-icon';
import { UserIcon } from '../../assets/icon/user-icon';
import { HeartIcon } from '../../assets/icon/heart-icon';
import { CartIcon } from '../../assets/icon/cart-icon';
import { CloseIcon } from '../../assets/icon/close-icon';
import { Modal } from '../../components/ui/Modal/Modal';
import { useModal } from '../../hooks/useModal';
import { loadState } from '../../lib/storage';
import { useGetCatalog } from "../../redux/servise/catalog-api";
import { CatalogCard } from "../../page/home/components/catalogCard";
import { nanoid } from 'nanoid';
import { useGetTodo } from '../../redux/servise/useGetTodo';
import { SearchProducts } from '../../components/SearchProducts';
import { useGetAll } from '../../redux/servise/All-api';
import { Dialog, Transition } from '@headlessui/react';
import { useSelector } from 'react-redux';


export const Header = () => {

    const user = loadState("user");

    const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    const handleCatalogClick = () => {
        setIsCatalogOpen(!isCatalogOpen);
    };

    const handleCloseCatalog = () => {
        setIsCatalogOpen(false);
    };

    const { data } = useGetCatalog()
    const { data: SearchData, isLoading } = useGetAll()

    let [Open, setOpen] = useState(true)

    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }


    const cartItems = useSelector((state) => state.todo.cartItems)
    const length = cartItems.length;
    const product = loadState("shoppingCards");


    const likeItems = useSelector((state) => state.like.likeItems)
    const lengthLike = likeItems.length;

    return (
        <header className='border-b-2 shadow-sm '>
            <div className=' max-sm:hidden py-2 bg-[#FCFCFC] '>
                <div className="container">
                    <div className='flex items-center justify-end gap-6'>
                        <div className='hover:text-[#36B7F7] text-black  transition-all duration-300'>
                            <Link>
                                Доставка и оплата
                            </Link>
                        </div>
                        <div className='hover:text-[#36B7F7] text-black  transition-all duration-300'>
                            <Link>
                                Пункты выдачи
                            </Link>
                        </div>
                        <div className='hover:text-[#36B7F7] text-black transition-all duration-300'>
                            <Link>
                                Поддержка
                            </Link>
                        </div>
                        <div className='hover:text-[#36B7F7] text-black  transition-all duration-300'>
                            <a className='flex items-center gap-4' href="tel:+998332000607">
                                <TelIcon />
                                +998 33 200 06 07
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-4 max-sm:hidden'>
                <div className="container">
                    <div className='flex relative sm:gap-2 md:gap-8  gap-8 items-center justify-between'>
                        <div className='flex items-center sm:gap-2 md:gap-5 gap-[57px]'>
                            <div className='w-[130px] sm:w-[110px] flex items-center justify-center'>
                                <Link to="/">
                                    <img className='w-[120px]' src={logo} alt="" />
                                </Link>
                            </div>
                            <div className='group'>
                                <button className='flex bg-aureolin text-black group-hover:text-black transition-all duration-300 text-[20px] items-center gap-3 py-[12px] px-3 pr-[45px] sm:pr-2 md:pr-[45px] rounded-xl border-2 group-hover:border-black' onClick={() => document.getElementById('my_modal_2').showModal()}>
                                    <div className='group-hover:text-black transition-all w-8 duration-300 flex items-center text-black-800 '>
                                        {isCatalogOpen ? <CloseIcon /> : <MenuIcon />}
                                    </div>
                                    <div className='sm:hidden md:block'>
                                        Каталог
                                    </div>
                                </button>
                            </div>
                        </div>
                        <form className='max-w-[673] w-[100%] relative'>
                            <input className='border-2  text-black outline-none bg-transparent w-[100%] rounded-xl focus:border-black text-[16px] p-4' placeholder='Поиск' type="text" name="search" id="search" />
                            <div className='absolute right-4 top-[50%] translate-y-[-50%]'>
                                <SearchIcon />
                            </div>
                        </form>

                        <div className='flex items-center sm:gap-2 md:gap-8 gap-8'>
                            <Link to="/profile">
                                <div className='flex text-black hover:text-[#299efe] transition-all duration-300 flex-col items-center justify-center'>
                                    <UserIcon />
                                    Профиль
                                </div>
                            </Link>
                            <Link to='/favourite'>
                                <div className='flex relative text-black hover:text-[#299efe] transition-all duration-300 flex-col items-center justify-center'>
                                    <HeartIcon />
                                    Избранное
                                    <span className=' absolute w-4 h-4 top-[-4px] right-3 rounded-full bg-[#EB133D] text-white flex items-center justify-center text-[12px] '>
                                        {lengthLike ? lengthLike : 0}
                                    </span>
                                </div>
                            </Link>
                            <Link to='/cart'>
                                <div className='flex relative text-black hover:text-[#299efe] transition-all duration-300 flex-col items-center justify-center'>
                                    <CartIcon />
                                    Корзина
                                    <span className=' absolute w-4 h-4 top-[-4px] right-2 rounded-full bg-[#EB133D] text-white flex items-center justify-center text-[12px] '>
                                        {product.todo.cartItems.length ? product.todo.cartItems.length : length}
                                    </span>
                                </div>
                            </Link>
                        </div>

                        <dialog key={nanoid} id="my_modal_2" className="modal ">
                            <div key={nanoid} className="py-[20px] px-[50px] w-[987px] h-[464px] bg-white flex items-center justify-between flex-wrap  ">
                                {
                                    data?.map((item) =>
                                        <Link key={item.id} to={item.name}><CatalogCard key={item.id} {...item} /></Link>
                                    )
                                }
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>


                    </div>

                    <dialog key={nanoid} id="my_modal_3" className="modal ">
                        <div className='bg-black overflow-y-scroll w-[500px] h-[500px]'>
                            {
                                SearchData?.map((item) => <SearchProducts key={item.id} {...item} />)
                            }
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>

                </div>
            </div>
            <div className='hidden max-sm:block'>
                <div className="container ">
                    <div className='relative'>
                        <div className='flex py-2 items-center justify-between'>
                            <div className=' text-black '>
                                {!user ? (
                                    <button onClick={open}>
                                        <UserIcon />
                                    </button>
                                ) : (
                                    <Link to='/profile'>
                                        <UserIcon />
                                    </Link>
                                )}

                            </div>
                            <div className='w-[100px] mr-[-40px] flex items-center justify-center'>
                                <Link to="/">
                                    <img className='w-[90px]' src={logo} alt="" />
                                </Link>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='  text-black'>
                                    <Link>
                                        <HeartIcon />
                                    </Link>
                                </div>
                                <div className='  text-black'>
                                    <Link>
                                        <CartIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mb-2 gap-1'>
                            <button onClick={handleCatalogClick} className='p-[10px] rounded-md text-white bg-[#299efe]'>
                                {isCatalogOpen ? <CloseIcon /> : <MenuIcon />}
                            </button>
                            <form className='max-w-[673] w-[100%] relative'>
                                <input className='border-2  text-black outline-none bg-transparent w-[100%]  focus:border-[#299efe] text-[16px] p-[10px] rounded-md' placeholder='Поиск' type="text" name="search" id="search" />
                                <div className='absolute right-4 top-[50%] translate-y-[-50%]'>
                                    <SearchIcon />
                                </div>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, earum. Quasi rem nisi unde placeat ex eos ipsa pariatur iusto dolorum repellendus! Velit iste exercitationem voluptatibus vero atque sunt laboriosam.
                                    </div>
                            </form>

                        </div>
                        <div className={`absolute opacity-0 border-2 ${isCatalogOpen ? `opacity-100` : `opacity-0`}  rounded-md sm:w-[100%] w-[100%] border-[#299efe] h-[200px] bottom-[-210px]`}>
                            Catalog Content
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
