import { Swiper, SwiperSlide } from "swiper/react";
import useWindowSize from "@shared/lib/useWindowSize";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./AuctionSlider.scss";

import { Pagination, Navigation } from "swiper";
import AuctionCard from "@entities/auction/ui/auction-card/AuctionCard";

interface IAuctionSliderProps {
    data: any[];
    }

export const AuctionSlider = ({data}: IAuctionSliderProps) => {
    const {width} = useWindowSize()

    const configureSlider = () => {
        if (width && width <= 600) {
            return 1
        }

        if (width && width <= 1400) {
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
