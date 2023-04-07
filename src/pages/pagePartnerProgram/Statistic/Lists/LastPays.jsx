import React from 'react';
import styles from "@/pages/pagePartnerProgram/Statistic/Lists/LastPays.module.scss";
import PayerUser from "@/pages/pagePartnerProgram/Statistic/Lists/PayerUser";
import avatar from "@assets/Partners/User.svg";

function LastPays(props) {
    return (
        <div className={styles.payers}>
            <h3 className={styles.payers__title}>Inviters leaders</h3>
            <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'}/>
            <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'}/>
            <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'}/>
            <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'}/>
            <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'}/>
            <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'}/>
            <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'}/>
            <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'}/>
            <PayerUser avatar={avatar} amount={5} name={'@mur.mur'} money={1000} date={'22/02/2023'} time={'23:03'}/>
        </div>
    );
}

export default LastPays;
