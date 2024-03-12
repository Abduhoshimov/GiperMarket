import React from "react";
import Slider from "react-slick";
import { PrevIcon } from "../../assets/icon/prevIcon";
import { NextIcon } from "../../assets/icon/nextIcon";
import { useGetBanner } from "../../redux/servise/banners-api";
import { BanerCard } from "../banerCard";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", width: "50px", left: '95%', position: "absolute", zIndex: 10, top: "270px" }}
            onClick={onClick}
        >
            <NextIcon />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", width: "50px", left: "43px", position: "relative", zIndex: 10, top: "270px" }}
            onClick={onClick}
        >
            <PrevIcon />
        </div>
    );
}


export default function SimpleSlider() {
    const { data } = useGetBanner()
    var settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6300,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        data?.map((item) => <BanerCard key={item.id} {...item}/>)
                    }
                </Slider>
            </div>
        </div>
    );
}