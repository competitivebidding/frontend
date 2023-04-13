import React, { useEffect, useRef, useState } from 'react'

const AuctionActiveTimer = ({ id, changeStatus, active }) => {
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }

  const [timeLeft, setTimeLeft] = useState(60)

  const minutes = getZero(Math.floor(timeLeft / 60))
  const seconds = getZero(Math.floor(timeLeft - minutes * 60))

  useEffect(() => {
    const interval = setInterval(() => {
      active &&
        setTimeLeft((timeLeft) => {
          if (timeLeft >= 1) {
            return timeLeft - 1
          } else {
            changeStatus(id, 'end')
            return 0
          }
        })
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [active])

  // const [timeMinutes, setTimerMinutes] = useState('00');
  // const [timeSeconds, setTimerSeconds] = useState('00');

  // let interval = useRef();

  // const startTimer = () => {
  //     const endTime = 3 * 60 * 1000;

  //     interval = setInterval(() => {
  //         const now = new Date();
  //         const distance = endTime - now;

  //         const minutes = getZero(Math.floor((distance / (1000 * 60)) % 60)),
  //             seconds = getZero(Math.floor((distance / 1000) % 60))

  //         if (distance < 0) {
  //             clearInterval(interval.current)
  //             changeStatus(id, 'end')

  //         } else {
  //             setTimerMinutes(minutes);
  //             setTimerSeconds(seconds);
  //         }

  //     }, 1000);
  // };

  // useEffect(() => {
  //     if (active) {
  //         startTimer();
  //     }
  //     return () => {
  //         clearInterval(interval.current)
  //     }
  // })

  return (
    <div className="timer">
      <div>Start in:</div>
      <div className="timer__timeRemaning">
        <span className="time">{minutes}</span>
        <span className="time">:</span>
        <span className="time">{seconds}</span>
      </div>
    </div>
  )
}

export default AuctionActiveTimer
