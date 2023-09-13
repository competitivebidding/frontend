import React from 'react'
import styles from '@/entities/partners/ui/last-pays/LastPays.module.scss'
import PayerUser from '@/entities/partners/ui/payer-user/PayerUser'
import avatar from '@assets/Partners/User.svg'

function LastPays() {
  return (
    <div className={styles.payers}>
      <h3 className={styles.payers__title}>Last pays</h3>
      <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'} />
      <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'} />
      <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'} />
      <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'} />
      <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'} />
      <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'} />
      <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'} />
      <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'} />
      <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'} />
    </div>
  )
}

export default LastPays
