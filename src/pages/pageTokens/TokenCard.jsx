import React, { useState, useEffect } from 'react';
import { AppModal } from '../../components/appModal/AppModal';
import TokensPage from './TokensPage';

const TokenCard = ({ tokens, prize, buttonName, id }) => {
  const [modal, setModal] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [showTimer, setShowTimer] = useState(true);
  const [remainingTime, setRemainingTime] = useState(86400);

  const toggleButton = () => {
    setModal(!modal);
  };

  const toggleButtonAd = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) {
      setShowTimer(false);
    }
  }, [remainingTime]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    return formattedTime;
  };


  return (
    <>
      <div className='token'>
        <h1 className='token__header'>{tokens}</h1>
        <h2 className='token__prize'>{prize}</h2>
        <button className='token__button' onClick={id === 5 ? toggleButtonAd : toggleButton}>
          {buttonName}
        </button>
      </div>
      {(id >= 1 && id <= 4) ? (
        <>
          <div
            className={modal ? 'overlay' : 'overlay overlay_hidden'}
            onClick={toggleButton}
          ></div>

          <div
            className={modal ? 'modal' : 'modal modal_hidden'}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className='modal__header'>Congratulations!</h3>

            <h4 className='modal__tokens'>+ {tokens}</h4>
            <p className='modal__text'>
              Your account has been replenished <br /> by {tokens}
            </p>
            <button className='modal__button' onClick={toggleButton}>
              Excellent
            </button>
          </div>
        </>
      ) : null}
      {id === 5 ? (
        <>
          {modal && (

            <AppModal isOpen={modal} onClose={toggleButton}>
              <div className='modalAd'>
                <h3 className='modalAd__header'>Advertising</h3>
                {showTimer ? (
                  <>
                    <h4 className='modalAd__video'>
                      <iframe
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/XFrvFe7hKRU'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      ></iframe>
                    </h4>
                    <p className='modalAd__text'>
                      Advertising can be viewed once a day. The next viewing will be available in{' '}
                      {formatTime(remainingTime)}
                    </p>
                    <button className='modalAd__button' onClick={toggleButton}>
                      Pick up ROTO
                    </button>
                  </>
                ) : (
                  <>
                    <h4 className='modalAd__video'>Video content will be available now</h4>
                    <button className='modalAd__button' onClick={toggleButton}>
                      Pick up ROTO
                    </button>
                  </>
                )}
              </div>
            </AppModal>

          )}
        </>
      ) : null}
    </>
  );
};

export default TokenCard;
