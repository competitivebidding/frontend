// import React, { useState, useRef, useEffect } from 'react';
// import AuctionCard from '@entities/auction/ui/auction-card/AuctionCard';

// import './Slider.scss';

// interface SlideData {
//     id: number;
//     alt: string
//     title: string
//     date: Date
//     bids: string
//     places: string
//     changeStatus: boolean
//     startedAt: Date
// }

// interface SliderProps {
//     data: SlideData[];
// }

// const Slider = ({ data }: SliderProps) => {
//     const [activeSlide, setActiveSlide] = useState(0);
//     const sliderContainer = useRef<HTMLDivElement>(null);
//     const [width, setWidth] = useState(0);

//     useEffect(() => {
//         if (sliderContainer.current) {
//             setWidth(sliderContainer.current.clientWidth);
//         }
//     }, []);

//     const slidesPerSlide = (): number => {
//         if (width > 800) {
//             return 3;
//         }

//         if (width <= 400) {
//             return 1;
//         }

//         return width > 600 && width <= 800 ? 2 : 1;
//     };

//     const subarray: SlideData[][] = [];
//     for (let i = 0; i < Math.ceil(data.length / slidesPerSlide()); i++) {
//         subarray[i] = data.slice(i * slidesPerSlide(), i * slidesPerSlide() + slidesPerSlide());
//     }
//     console.log(subarray);

//     const Slide = ({ slideData }: {slideData: SlideData[]}) => {
//         const card = slideData.map((item) => {
//             // const { id, ...itemProps } = item;
//             return (
//                 <AuctionCard
//                     className="slider__card"
//                     id={item.id}
//                     alt={item.alt}
//                     title={item.title}
//                     date={item.date}
//                     bids={item.bids}
//                     places={item.places}
//                     changeStatus={item.changeStatus}
//                     startedAt={item.startedAt}
//                 />
//             )
//         });
//         return <div className="slide">{card}</div>;
//     };

//     const slides = subarray.map((slideData, index) => {
//         return <Slide key={index} slideData={slideData} />;
//     });

//     const changeSlide = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
//         const targetDot = e.currentTarget.getAttribute('data-slide-to');
//         setActiveSlide(targetDot ? parseInt(targetDot) : 0);
//     };

//     const dots = subarray.map((dot, index) => {
//         let clazz = 'slider__dots__item';
//         if (index === activeSlide) {
//             clazz += ' active';
//         }
//         return (
//             <li
//                 onClick={changeSlide}
//                 className={clazz}
//                 data-slide-to={index}
//                 key={index}
//             ></li>
//         );
//     });

//     return (
//         <div className="slider" ref={sliderContainer}>
//             <div
//                 style={{ transform: `translateX(${-width * activeSlide + 16}px)` }}
//                 className="slider__track"
//             >
//                 {slides}
//             </div>
//             <ol className="slider__dots">{dots}</ol>
//         </div>
//     );
// };

// export default Slider;
