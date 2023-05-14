import React, {useEffect, useRef, useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "@/hooks/useWindowSize";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./AuctionSlider.scss";

// import required modules
import { Pagination, Navigation } from "swiper";
import AuctionCard from "@/pages/pageAuctions/auctionCards/AuctionCard";

export default function AuctionSlider({data}) {
    const {width} = useWindowSize()

    const configureSlider = () => {
        if (width <= 600) {
            return 1
        }

        if (width <= 1400) {
            return 2
        }

        return 3
    }


    return (
        <div className={'auction-swiper-container'}>
            <Swiper
                slidesPerView={configureSlider()}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="auction-swiper"
            >
                {
                    data.map(item => {
                        const {id, ...itemProps} = item;
                        return (
                            <SwiperSlide key={id}>
                              <AuctionCard className="slider__card" {...itemProps} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}
