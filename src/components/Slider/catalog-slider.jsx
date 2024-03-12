import React from "react";
import Slider from "react-slick";
import { useGetCatalog } from "../../redux/servise/catalog-api";
import { CatalogCard } from "../../page/home/components/catalogCard";
import { Link } from "react-router-dom";

export function MultipleItems() {
    const settings = {
        infinite: true,
        speed: 3500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    const { data } = useGetCatalog()

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    data?.map((item) => <Link key={item.id} to={item.name}> <CatalogCard key={item.id} {...item} /></Link> )
                }
            </Slider>
        </div>
    );
}