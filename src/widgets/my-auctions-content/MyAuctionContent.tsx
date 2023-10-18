import React, { useState } from 'react';
import cls from './MyAuctionContent.module.scss';
import { AuctionList } from '@entities/auction/ui/auctions-list/AuctionList';
import { useTranslation } from 'react-i18next'

const MyAuctionContent = () => {
  const [category, setCategory] = useState('active');
  const { t } = useTranslation('myAuctionContent')

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  const categoryButtons = [
    { name: 'active', label: t('Active auctions') },
    { name: 'wait', label: t('Announcements') },
    { name: 'end', label: t('Inactive auctions') },
  ];

  const buttons = categoryButtons.map(({ name, label }) => (
      <button
          key={name}
          className={`${cls.myAuction__btn} ${category === name ? cls['btn-active'] : cls.btnInactive}`}
          onClick={() => handleCategoryChange(name)}
      >
        {label}
      </button>
  ));

  return (
      <div className={cls.myAuctions__content}>
        <div className={cls.myAuctions__btnsgroup}>{buttons}</div>
        <AuctionList />
      </div>
  );
};

export default MyAuctionContent;
