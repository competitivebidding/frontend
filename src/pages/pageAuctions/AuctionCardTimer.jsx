import React, { useEffect, useRef, useState } from 'react'
import AuctionActiveTimer from './AuctionActiveTimer'

const AuctionCardTimer = ({ date, timer, changeStatus, id }) => {
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
  const [active, activeTimer] = useState(false)

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
        changeStatus(id, 'active')
        activeTimer(true)
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

  const auctionDate = new Intl.DateTimeFormat('ru', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(Date.parse(date))

  if (!timer) {
    return (
      <div className="card__start">
        <span>Start in:</span>
        <span>{auctionDate.split(',')}</span>
      </div>
    )
  }

  if (timer) {
    if (!active) {
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
    } else {
      return <AuctionActiveTimer id={id} active={active} changeStatus={changeStatus} />
    }
  }
}

export default AuctionCardTimer
