import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useGetNotebooks } from "../../../redux/servise/notebook-api";
import { NextIcon } from "../../../assets/icon/nextIcon";
import { PrevIcon } from "../../../assets/icon/prevIcon";
import NetflixLoader2 from "../../../components/skletons/products-skleton";
import { TelCards } from "../../Tel/components/TelCards";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ display: "block", width: "50px", left: '95%', position: "absolute", zIndex: 10, top: "-50px" }}
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
            style={{ display: "block", width: "50px", left: "92%", position: "relative", zIndex: 10, top: "-50px" }}
            onClick={onClick}
        >
            <PrevIcon />
        </div>
    );
}

export default function UnevenSetsFinite2() {
    const { data, isLoading } = useGetNotebooks()
    var settings = {
        infinite: false,
        speed: 500,
        slidesToScroll: 4,
        slidesToShow: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="slider-container">

            {
                !isLoading ?
                    <div className="mt-[20px] mb-[50px]">
                        <Slider {...settings}>
                            {
                                data?.map((item) =>  <TelCards key={item.id} {...item} />)
                            }
                        </Slider>
                    </div>

                    :
                    <NetflixLoader2 />
            }
        </div>
    );
}

