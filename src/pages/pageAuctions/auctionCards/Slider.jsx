//старое, на всякий случай не удалил пока

import React, { useState, useRef, useEffect } from 'react';
import AuctionCard from './AuctionCard';

import './Slider.scss';

const Slider = ({ data }) => {

    const [activeSlide, setActiveSlide] = useState(0);

    const sliderContainer = useRef(null)

    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(sliderContainer.current.clientWidth)
    }, []);


    const slidesPerSlide = () => {
        if (width > 800) {
            return 3
        }

        if (width <= 400) {
            return 1
        }

        return width > 600 &&  width <= 800 ? 2 : 1;
    }

    // разбитие массива карточек на подмассивы по три (или сколько надо) карточек
    let subarray = [];
    for (let i = 0; i < Math.ceil(data.length / slidesPerSlide()); i++) {
        subarray[i] = data.slice((i * slidesPerSlide()), (i * slidesPerSlide()) + slidesPerSlide());
    }
    console.log(subarray)

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
        <div className='slider' ref={sliderContainer}>
            <div style={{ transform: `translateX(${-width * activeSlide + 16}px)` }} className='slider__track'>
                {slides}
            </div>
            <ol className='slider__dots'>
                {dots}
            </ol>
        </div>
    );
}

export default Slider;
