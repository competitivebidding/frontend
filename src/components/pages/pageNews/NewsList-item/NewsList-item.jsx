import React from 'react';
import './NewsList-item.scss';

const NewsListItem = ({img, alt, title, date, text}) => {
    
    return (
        <div className='listItem'>
            <div className="listItem__imgbox">
                <img src={img} alt={alt} />
            </div>
            <div className="lsitItem__header">
                <div className="listItem__title">{title}</div>
                <div className="listItem__date">{date}</div>
            </div>
            <div className="listItem__text">{text}</div>
        </div>
    );
}

export default NewsListItem;
