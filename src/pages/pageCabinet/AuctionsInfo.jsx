import React from 'react';
import styles from './AuctionsInfo.module.scss'

function AuctionsInfo({amount, wins, winsSum, rotoSpent, auctions}) {
    return (
        <div className={styles.auctions_info}>
            <div className={styles.amount}>
                <div className={styles.amount__header}>
                    <h3>Auctions amount</h3>
                    <span>{amount}</span>
                </div>
                <div className={styles.amount__body}>
                    <div className={styles.amount__item}>
                        <h4>iPhone 12 128Gb</h4>
                    </div>
                </div>
            </div>
            <div className={styles.winsCount}></div>
            <div className={styles.rotoSpent}></div>
            <div className={styles.winsSum}></div>
        </div>
    );
}

export default AuctionsInfo;
