import React, { useState, useEffect } from 'react';
import cls from './AuctionsPageContent.module.scss';
import { AuctionList } from '@entities/auction/ui/auctions-list/AuctionList';
import { useQuery } from "@apollo/client";
import { GET_AUCTIONS } from "@shared/schemas/auctions/auctions";
import { AuctionSlider } from "@shared/ui/slider/AuctionSlider";
import { useTranslation } from 'react-i18next';
import iconLoader from "@assets/Chat/iconLoader.svg"

interface IAuctionsPageContent {
    searchValue: string;
}

export const Spinner = () => (
    <div className='spinner'>
        <img src={iconLoader} alt="Spinner" />
    </div>
);

export const AuctionsPageContent = ({ searchValue }: IAuctionsPageContent) => {
    const { loading, data } = useQuery(GET_AUCTIONS, {
        variables: {
            search: searchValue,
        },
    });
    const { t } = useTranslation('auctionsPage');

    const [loadingSlider, setLoadingSlider] = useState(true);
    const [loadingList, setLoadingList] = useState(true);

    useEffect(() => {
        if (data) {
            setLoadingSlider(false);
            setLoadingList(false);
        }
    }, [data]);

    const newAuctions = data?.getAuctions.filter(card => card.status.name === 'New');
    const openAuctions = data?.getAuctions.filter(auction => auction.status.name !== 'Open');

    return (
        <>
            {/*<div className={cls.title}>{t('Upcoming announcements')}</div>*/}
            {/*{loading ? <Spinner /> */}
            {/*: newAuctions && newAuctions.length > 0 */}
            {/*? <AuctionSlider data={newAuctions} /> */}
            {/*: <div className={cls.no__auctions}>{t('No upcoming announcements')}</div>*/}
            {/*}*/}
            
            <div className={cls.title}>{t('Active Auctions')}</div>
            {loading ? <Spinner /> : openAuctions && openAuctions.length > 0 
            ? <AuctionList dataFilter={openAuctions} searchValue={searchValue} /> 
            : <div className={cls.no__auctions}>{t('No active Auctions')}</div>
            }
        </>
    );
};