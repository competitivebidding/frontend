import React, {useState,useEffect} from 'react';
import styles from "./PartnersLists.module.scss"
import PartnersListFilter from "@/feauters/filter-button/FilterButton";
import FullUser from "@/widgets/partners/ui/partners-statistic/ui/full-user/FullUser";
import avatar from "@assets/Partners/User.svg"


function PartnersLists() {
    const [isClicked, setIsClicked] = useState(false);

    const users = [
        {
            avatar: avatar,
            ign: 'User User',
            id: 56789085,
            startDate: '22.01.2023',
            earnedThisMonth: 22,
            spentThisMonth: 4,
            earned: 22,
            spent: 4
        },
        {
            avatar: avatar,
            ign: 'User User',
            id: 56789086,
            startDate: '22.01.2023',
            earnedThisMonth: 22,
            spentThisMonth: 4,
            earned: 22,
            spent: 4
        },
        {
            avatar: avatar,
            ign: 'User User',
            id: 56789087,
            startDate: '22.01.2023',
            earnedThisMonth: 22,
            spentThisMonth: 4,
            earned: 22,
            spent: 4
        },
        {
            avatar: avatar,
            ign: 'User User',
            id: 56789088,
            startDate: '22.01.2023',
            earnedThisMonth: 22,
            spentThisMonth: 4,
            earned: 22,
            spent: 4
        },
        {
            avatar: avatar,
            ign: 'User User',
            id: 56789089,
            startDate: '22.01.2023',
            earnedThisMonth: 22,
            spentThisMonth: 4,
            earned: 22,
            spent: 4
        },
        {
            avatar: avatar,
            ign: 'User User',
            id: 56789090,
            startDate: '22.01.2023',
            earnedThisMonth: 22,
            spentThisMonth: 4,
            earned: 22,
            spent: 4
        }
    ]

    return (
        <div className={styles.lists}>
            <div className={styles.header}>
                <div className={styles.header__filter + ' ' + styles.header__filter_partner}>
                    <h4>Partner</h4>
                    <PartnersListFilter isClicked={isClicked}/>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_join}>
                    <h4>Join date</h4>
                    <PartnersListFilter isClicked={isClicked}/>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_spentM}>
                    <h4>Spent this month</h4>
                    <PartnersListFilter isClicked={isClicked}/>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_earnedM}>
                    <h4>Earned this month</h4>
                    <PartnersListFilter isClicked={isClicked}/>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_spent}>
                    <h4>Total earns</h4>
                    <PartnersListFilter isClicked={isClicked}/>
                </div>
                <div className={styles.header__filter + ' ' + styles.header__filter_earned}>
                    <h4>Total spends</h4>
                    <PartnersListFilter isClicked={isClicked}/>
                </div>
            </div>
            <div className={styles.users_list}>
                {
                    users.map(user => {
                        return <FullUser userData={user} key={user.id}/>
                    })
                }
            </div>
        </div>
    );
}

export default PartnersLists;
