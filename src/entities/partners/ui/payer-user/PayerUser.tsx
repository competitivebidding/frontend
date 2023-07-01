import React from 'react';
import styles from "@/entities/partners/ui/payer-user/PayerUser.module.scss";

interface IPayerUser {
  avatar: string
  name: string
  money: number
  date: string
  time: string
}

function PayerUser({avatar, name, money, date, time}: IPayerUser) {
    return (
        <div className={styles.user}>
            <img src={avatar} alt="avatar"/>
            <div className={styles.user__ign}>
                <p className={styles.user__name}>{name}</p>
            </div>
            <div className={styles.user__contribution}>
                <p>{money}</p><span> r.</span>
            </div>
            <div className={styles.user__date}>
                <p>{date}</p>
                <p>{time}</p>
            </div>
        </div>
    );
}

export default PayerUser;
