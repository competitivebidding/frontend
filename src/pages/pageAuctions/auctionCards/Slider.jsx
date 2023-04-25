import React, { useState } from 'react';
import AuctionCard from './AuctionCard';

import './Slider.scss';

const Slider = ({ data }) => {

    const [activeSlide, setActiveSlide] = useState(0);

    // разбитие массива карточек на подмассивы по три карточки
    let subarray = [];
    for (let i = 0; i < Math.ceil(data.length / 3); i++) {
        subarray[i] = data.slice((i * 3), (i * 3) + 3);
    }

    // формирование слайдов
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
        return <Slide key={index} slideData={slideData} />
    })

    // смена слайдов
    const changeSlide = (e) => {
        const targetDot = e.target.getAttribute('data-slide-to');
        setActiveSlide(targetDot);
    }

    // формирование точек
    const dots = subarray.map((dot, index) => {
        let clazz = 'slider__dots__item';
        if (index == activeSlide) {
            clazz += ' active';
        }
        return <li onClick={(e) => changeSlide(e)} className={clazz} data-slide-to={index} key={index}></li>
    })

    return (
        <div className='slider'>
            <div style={{ transform: `translateX(${-920 * activeSlide}px)` }} className='slider__track'>
                {slides}
            </div>
            <ol className='slider__dots'>
                {dots}
            </ol>
        </div>
    );
}

export default Slider;
