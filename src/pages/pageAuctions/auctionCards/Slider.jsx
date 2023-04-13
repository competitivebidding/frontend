import React from 'react';
import AuctionCard from './AuctionCard';

import './Slider.scss';

const Slider = ({ data }) => {

    let subarray = [];
    for (let i = 0; i < Math.ceil(data.length / 3); i++) {
        subarray[i] = data.slice((i * 3), (i * 3) + 3);
    }

    const Slide = ({ slideData }) => {
        const card = slideData.map(item => {
            const { id, ...itemProps } = item;
            return <AuctionCard className="slider__card" key={id} {...itemProps} />
        })
        return (
            <div className='slide'>
                {card}
            </div>
        )
    }

    const slides = subarray.map((slideData, index) => {
        return <Slide key={Math.floor(Math.random() * (100 - 1)) + 1} slideData={slideData} />
    })

    const dots = subarray.map((slide, index) => {
        let clazz = 'slider__dots__item';
        if (index == 0) {
            clazz += ' active'
        }

        return <li className={clazz} data-slide-to={index}></li>
    })


    return (
        <div className='slider'>
            <div className='slider__track'>
                {slides}
            </div>
            <ol className='slider__dots'>
                {dots}
            </ol>
        </div>
    );
}

export default Slider;
