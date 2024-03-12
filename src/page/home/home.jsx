import React from 'react'
import SimpleSlider from '../../components/Slider/slider'
import { MultipleItems } from '../../components/Slider/catalog-slider'
import UnevenSetsFinite from '../../components/Slider/products-slider'
import { useGetAds } from '../../redux/servise/ads-api';
import { AdsCards } from './components/AdsCards';
import { useGetTels } from '../../redux/servise/tel-api';
import { TelCard } from './components/TelCard';
import { useGetComputers } from '../../redux/servise/computers-api';
import { Link } from 'react-router-dom';
import UnevenSetsFinite2 from './components/UnevenSetsFinite2';
import { useGetBrand } from '../../redux/servise/brand-api';
import { BrandImgs } from './components/BrandImgs';

export const Home = () => {
    const { data } = useGetAds()
    const { data: data2 } = useGetTels()
    const { data: data3 } = useGetComputers()
    const { data: data4 } = useGetBrand()
    return (
        <div>
            <section>
                <SimpleSlider />
            </section>
            <section>
                <div className="container my-[32px]">
                    <MultipleItems />
                </div>
            </section>
            <section>
                <div className="container">
                    <h1 className='text-carbon text-[24px] font-semibold leading-[36px]'>
                        Смартфоны и планшеты
                    </h1>
                    <UnevenSetsFinite />
                </div>
            </section>
            <section className='bg-aureolin'>
                <div className="container pt-[16px] px-[45px] pb-[30px] mt-[20px]">
                    <h1 className='text-black text-2xl font-semibold leading-9'>Акции</h1>
                    <div className='flex items-center justify-between gap-[22px] mt-[24px]'>
                        {
                            data?.map((item) => <AdsCards key={item.id} {...item} />)
                        }
                    </div>
                </div>
            </section>
            <section>
                <div className="container mt-[60px] flex items-center gap-[38px]">
                    <div>
                        <h2 className='text-carbon text-[24px] font-normal leading-[36px] mb-[39px] '>Смартфоны и планшеты</h2>
                        {
                            data2?.slice(0, 3)?.map((item) => <Link key={item.id} to={`/single-product/${item.id}`}><TelCard key={item.id} {...item} /></Link>)
                        }
                    </div>
                    <div>
                        <h2 className='text-carbon text-[24px] font-normal leading-[36px] mb-[39px] '>Ноутбуки, планшеты и компьютеры</h2>
                        {
                            data3?.slice(0, 3)?.map((item) => <Link key={item.id} to={`/single-product/${item.id}`}><TelCard key={item.id} {...item} /></Link>)
                        }
                    </div>
                    <div>
                        <h2 className='text-carbon text-[24px] font-normal leading-[36px] mb-[39px] '>Смартфоны и планшеты</h2>
                        {
                            data2?.slice(3, 6)?.map((item) => <Link key={item.id} to={`/single-product/${item.id}`}><TelCard key={item.id} {...item} /></Link>)
                        }
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <h1 className='text-carbon text-[24px] font-semibold leading-[36px]'>
                        Смартфоны и планшеты
                    </h1>
                    <div className='ml-[50px]'>
                        <UnevenSetsFinite />
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <h1 className='text-carbon text-[24px] font-semibold leading-[36px]'>
                        Ноутбуки, планшеты и компьютеры
                    </h1>
                    <div className='ml-[50px]'>
                        <UnevenSetsFinite2 />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h1 className='text-carbon text-[24px] font-semibold leading-[36px] mb-[24px]' >
                        Популярные бренды
                    </h1>
                    <div className='flex items-center justify-between flex-wrap gap-[20px]' >
                        {
                            data4?.map((item) => <Link key={item.id} to={`/brand-page/${item?.brand}`}><BrandImgs key={item.id} {...item} /></Link>)
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
