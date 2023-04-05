import React from 'react';
import styles from "./BestInviters.module.scss";
import InviterUser from "@/pages/pagePartnerProgram/Statistic/Lists/InviterUser";
import avatar from "@assets/Partners/User.svg";

function BestInviters() {
    return (
        <div className={styles.invites}>
            <h3 className={styles.invites__title}>Inviters leaders</h3>
            <div className={styles.invites__users_list}>
                <InviterUser avatar={avatar} amount={5} name={'User'} subname={'user'}/>
                <InviterUser avatar={avatar} amount={3} name={'User'} subname={'user'}/>
                <InviterUser avatar={avatar} amount={2} name={'User'} subname={'user'}/>
            </div>
        </div>
    );
}

export default BestInviters;
