import React from 'react';
import cls from './NewsListItem.module.scss';

interface INewsListItem {
  images: string[];
  title: string;
  date: string;
  text: string;
}

const NewsListItem = ({ images, title, date, text }: INewsListItem) => {
  const newDate = new Date(date);

  const ImgItem = () => {
    if (images && Array.isArray(images)) {
      const getImages = images.map((image, index) => (
          <img key={index} src={image || '/src/pages/page-news/temporary-auctions-img/quare.png'} alt="" />
      ));
      return <div className={cls.listItem__imgbox}>{getImages}</div>;
    } else {
      return (
          <div className={cls.listItem__imgbox}>
            <img src={images || '/src/pages/page-news/temporary-auctions-img/quare.png'} alt="" />
          </div>
      );
    }
  };

  return (
      <div className={cls.listItem}>
        <ImgItem />
        <div className={cls.lsitItem__header}>
          <div className={cls.listItem__title}>{title}</div>
          <div className={cls.listItem__date}>{newDate.toUTCString()}</div>
        </div>
        <div className={cls.listItem__text}>{text}</div>
      </div>
  );
};

export default NewsListItem;
