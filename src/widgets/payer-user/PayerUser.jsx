import React from 'react';
import styles from "@/widgets/payer-user/PayerUser.module.scss";

function PayerUser({avatar, name, money, date, time}) {
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
