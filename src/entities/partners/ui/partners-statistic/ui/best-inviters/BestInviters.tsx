import React, {useEffect, useState} from 'react';
import styles from "./BestInviters.module.scss";
import InviterUser from "@/entities/partners/ui/partners-statistic/ui/inviter-user/InviterUser";
import avatar from "@assets/Partners/User.svg";
import {useQuery} from "@apollo/client";
import { GET_MY_REFERRALS } from '../../../../../../shared/schemas/user/referals'
import { ReferralUser } from '../../../../../../shared/lib/types/__generated-types__/graphql'


function BestInviters() {

    const [referrals, setReferrals] = useState<ReferralUser[] | null>(null)

    const {data, loading} = useQuery(GET_MY_REFERRALS)

    useEffect(() => {
        if (!loading) {
            setReferrals(data.getMyReferrals)
        }
    })

    return (
        <div className={styles.invites}>
            <h3 className={styles.invites__title}>Inviters leaders</h3>
            <div className={styles.invites__users_list}>
                {referrals && referrals.map(referral => (
                    <InviterUser key={referral.id} avatar={avatar} amount={2} name={referral.username} subname={referral.email}/>
                ))}
            </div>
        </div>
    );
}

export default BestInviters;
