import React, { useEffect, useRef, useState } from 'react'

const AuctionCardTimer = ({ date, timer, id }) => {
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }

  const [timeHours, setTimerHours] = useState('00')
  const [timeMinutes, setTimerMinutes] = useState('00')
  const [timeSeconds, setTimerSeconds] = useState('00')

  let interval = useRef()

  const startTimer = () => {
    const countCountDate = Date.parse(date)

    interval = setInterval(() => {
      const now = new Date()
      const distance = countCountDate - now

      const hours = getZero(Math.floor(distance / (1000 * 60 * 60))),
        minutes = getZero(Math.floor((distance / (1000 * 60)) % 60)),
        seconds = getZero(Math.floor((distance / 1000) % 60))

      if (distance < 0) {
        clearInterval(interval.current)
        // changeStatus(id, 'active')
      } else {
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000)
  }

  useEffect(() => {
    if (timer) {
      startTimer()
    }
    return () => {
      clearInterval(interval.current)
    }
  })


  if (timer) {
    return (
      <div className="timer">
        <div>Start in:</div>
        <div className="timer__timeRemaning">
          <span className="time">{timeHours}</span>
          <span className="time">:</span>
          <span className="time">{timeMinutes}</span>
          <span className="time">:</span>
          <span className="time">{timeSeconds}</span>
        </div>
      </div>
    )
  }
}

export default AuctionCardTimer;
