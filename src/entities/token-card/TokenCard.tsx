import React, { useState, useEffect, useRef } from 'react';
import { AppModal } from '@shared/ui/modal/AppModal';
import cls from './TokenCard.module.scss';

import video from '@assets/videoAd/shorts.mp4';

import { useTranslation } from 'react-i18next'

interface ITokenCardProps {
  tokens: string;
  prize: string;
  buttonName: string;
  id: number;
}

const TokenCard = ({ tokens, prize, buttonName, id }: ITokenCardProps) => {
  const [modal, setModal] = useState(false);
  const [nextModalActive, setNextModalActive] = useState(false);
  const videoRef = useRef(null);
  const [showTimer, setShowTimer] = useState(true);
  const [remainingTime, setRemainingTime] = useState(86400);
  const { t } = useTranslation('tokenPage')

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

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(
        2,
        '0'
    )}`;
  };

  const handleVideoEnded = () => {
    setModal(false);
    setNextModalActive(true);
  };

  return (
      <div className={cls.token}>
        <h1 className={cls['token__header']}>{tokens}</h1>
        <h2 className={cls['token__prize']}>{prize}</h2>
        <button className={cls['token__button']} onClick={id === 5 ? toggleButtonAd : toggleButton}>
          {t(buttonName)}
        </button>
        {id >= 1 && id <= 4 ? (
            <>
              <div className={modal ? cls['overlay'] : `${cls['overlay']} ${cls['overlay_hidden']}`} onClick={toggleButton}></div>

              <div className={modal ? cls['modal'] : `${cls['modal']} ${cls['modal_hidden']}`} onClick={(e) => e.stopPropagation()}>
                <h3 className={cls['modal__header']}>{t('Congratulations')}!</h3>

                <h4 className={cls['modal__tokens']}>+ {tokens}</h4>
                <p className={cls['modal__text']}>
                  {t('Your account has been replenished')} <br /> {t('on')} {tokens}
                </p>
                <button className={cls['modal__button']} onClick={toggleButton}>
                  {t('Excellent')}
                </button>
              </div>
            </>
        ) : null}
        {id === 5 ? (
            <>
              {modal && (
                  <AppModal isOpen={modal} onClose={setModal}>
                    <div className={cls['modalAd']}>
                      <h3 className={cls['modalAd__header']}>{t('Advertising')}</h3>
                      {showTimer ? (
                          <>
                            <h4 className={cls['modalAd__video']}>
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
                            <h4 className={cls['modalAd__video']}>{t('Video content will be available now')}</h4>
                            <button className={cls['modalAd__button']} onClick={toggleButton}>
                              {t('Take')} ROTO
                            </button>
                          </>
                      )}
                    </div>
                  </AppModal>
              )}
              {nextModalActive && (
                  <AppModal isOpen={nextModalActive} onClose={setNextModalActive}>
                    <p className={cls['modalAd__text']}>
                      {t('Congratulations, you have successfully watched the ad and received 100 ROTO. For this currency, you can participate in auctions and win valuable prizes')}.
                    </p>
                    <button className={cls['modalAd__button']} onClick={() => setNextModalActive(false)}>
                      {t('Take')} 100 ROTO
                    </button>
                  </AppModal>
              )}
            </>
        ) : null}
      </div>
  );
};

export default TokenCard;
