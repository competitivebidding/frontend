import React from 'react'
import styles from './ForPartners.module.scss'

import pdf from '@assets/imgPartnerProgram/pdf.png'
import video from '@assets/imgPartnerProgram/video.png'
import chat from '@assets/imgPartnerProgram/chat.png'
import { useTranslation } from 'react-i18next'

function ForPartners() {
  const { t } = useTranslation('partnerPage')

  return (
    <div className={styles.for_partners}>
      <div className={styles.for_partners__item}>
        <h3>{t('PDF-presentation')}</h3>
        <img src={pdf} alt={'pdf'} />
        <div className={styles.rectangle}></div>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.for_partners__item}>
        <h3>{t('Video-presentation')}</h3>
        <img src={chat} alt={'video'} />
        <div className={styles.rectangle}></div>
      </div>
      <div className={styles.for_partners__item}>
        <h3>{t('Partners chat')}</h3>
        <img src={video} alt={'chat'} />
        <div className={styles.rectangle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  )
}

export default ForPartners
