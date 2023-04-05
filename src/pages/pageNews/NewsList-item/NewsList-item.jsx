import React from 'react';
import './NewsList-item.scss';

const NewsListItem = ({ img1, img2, alt, title, date, text }) => {
    const imgItem = () => {
        if (img1) {
            if (img2) {
                return (
                    <div className="listItem__imgbox">
                        <img src={img1} alt={alt} />
                        <img src={img2} alt={alt} />
                    </div>
                )
            } else {
                return (
                    <div className="listItem__imgbox">
                        <img src={img1} alt={alt} />
                    </div>
                )
            }
        } else {
            return (
                <>
                </>
            )
        }
    }

    return (
        <div className='listItem'>
            <div className="listItem__imgbox">
                {imgItem()}
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
