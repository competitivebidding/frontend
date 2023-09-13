import React, { useState, useEffect, useRef } from 'react'
import { AppModal } from '@shared/ui/modal/AppModal'

import video from '@assets/videoAd/shorts.mp4'

interface ITokenCardProps {
  tokens: string
  prize: string
  buttonName: string
  id: number
}

const TokenCard = ({ tokens, prize, buttonName, id }: ITokenCardProps) => {
  const [modal, setModal] = useState(false)
  const [nextModalActive, setNextModalActive] = useState(false)
  const videoRef = useRef(null)
  const [showTimer, setShowTimer] = useState(true)
  const [remainingTime, setRemainingTime] = useState(86400)

  const toggleButton = () => {
    setModal(!modal)
  }

  const toggleButtonAd = () => {
    setModal(!modal)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (remainingTime <= 0) {
      setShowTimer(false)
    }
  }, [remainingTime])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(
      2,
      '0',
    )}`
  }

  const handleVideoEnded = () => {
    setModal(false)
    setNextModalActive(true)
  }

  // console.log(videoRef.current)

  return (
    <>
      <div className="token">
        <h1 className="token__header">{tokens}</h1>
        <h2 className="token__prize">{prize}</h2>
        <button className="token__button" onClick={id === 5 ? toggleButtonAd : toggleButton}>
          {buttonName}
        </button>
      </div>
      {id >= 1 && id <= 4 ? (
        <>
          <div className={modal ? 'overlay' : 'overlay overlay_hidden'} onClick={toggleButton}></div>

          <div className={modal ? 'modal' : 'modal modal_hidden'} onClick={(e) => e.stopPropagation()}>
            <h3 className="modal__header">Congratulations!</h3>

            <h4 className="modal__tokens">+ {tokens}</h4>
            <p className="modal__text">
              Your account has been replenished <br /> by {tokens}
            </p>
            <button className="modal__button" onClick={toggleButton}>
              Excellent
            </button>
          </div>
        </>
      ) : null}
      {id === 5 ? (
        <>
          {modal && (
            <AppModal isOpen={modal} onClose={setModal}>
              <div className="modalAd">
                <h3 className="modalAd__header">Advertising</h3>
                {showTimer ? (
                  <>
                    <h4 className="modalAd__video">
                      <video
                        ref={videoRef}
                        width="560"
                        height="315"
                        autoPlay
                        muted
                        controls={false}
                        playsInline
                        onEnded={handleVideoEnded}
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    </h4>
                  </>
                ) : (
                  <>
                    <h4 className="modalAd__video">Video content will be available now</h4>
                    <button className="modalAd__button" onClick={toggleButton}>
                      Pick up ROTO
                    </button>
                  </>
                )}
              </div>
            </AppModal>
          )}
          {nextModalActive && (
            <AppModal isOpen={nextModalActive} onClose={setNextModalActive}>
              <p className="modalAd__text">
                Congratulations, you have successfully watched the ad and received 100 ROTO. For this currency, you can
                participate in auctions and win valuable prizes.
              </p>
              <button className="modalAd__button" onClick={() => setNextModalActive(false)}>
                Забрать 100 ROTO
              </button>
            </AppModal>
          )}
        </>
      ) : null}
    </>
  )
}

export default TokenCard
