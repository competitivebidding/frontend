// import React, { useEffect, useRef, useState } from 'react';
//
// interface IAuctionCardTimerProps {
//   date: string;
//   timer: boolean;
//   id: string;
//   changeStatus: boolean;
// }
//
// const AuctionCardTimer = ({ date, timer, id }: IAuctionCardTimerProps) => {
//   function getZero(num: number) {
//     if (num >= 0 && num < 10) {
//       return `0${num}`;
//     } else {
//       return num;
//     }
//   }
//
//   const [timeHours, setTimerHours] = useState<string | number>('00');
//   const [timeMinutes, setTimerMinutes] = useState<string | number>('00');
//   const [timeSeconds, setTimerSeconds] = useState<string | number>('00');
//
//   let interval = useRef<NodeJS.Timeout | null>(null);
//
//   const startTimer = () => {
//     const countCountDate = Date.parse(date);
//
//     interval.current = setInterval(() => {
//       const now = new Date();
//       const distance = countCountDate - now.getTime();
//
//       const hours = getZero(Math.floor(distance / (1000 * 60 * 60)));
//       const minutes = getZero(Math.floor((distance / (1000 * 60)) % 60));
//       const seconds = getZero(Math.floor((distance / 1000) % 60));
//
//       if (distance < 0) {
//         clearInterval(interval.current!);
//         // changeStatus(id, 'active')
//       } else {
//         setTimerHours(hours);
//         setTimerMinutes(minutes);
//         setTimerSeconds(seconds);
//       }
//     }, 1000);
//   };
//
//   useEffect(() => {
//     if (timer) {
//       startTimer();
//     }
//     return () => {
//       if (interval.current) {
//         clearInterval(interval.current);
//       }
//     };
//   }, [timer]);
//
//   if (timer) {
//     return (
//       <div className="timer">
//         <div>Start in:</div>
//         <div className="timer__timeRemaning">
//           <span className="time">{timeHours}</span>
//           <span className="time">:</span>
//           <span className="time">{timeMinutes}</span>
//           <span className="time">:</span>
//           <span className="time">{timeSeconds}</span>
//         </div>
//       </div>
//     );
//   } else {
//     return null;
//   }
// };
//
// export default AuctionCardTimer;
