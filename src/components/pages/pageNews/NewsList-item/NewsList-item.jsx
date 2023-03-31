import React from 'react';
import './NewsList-item.scss';

const NewsListItem = ({img1, img2, alt, title, date, text}) => {
    const imgBox = ()=> {
        if(img2){
            return(
                <div className="listItem__imgbox">
                    <img src={img1} alt={alt} />
                    <img src={img2} alt={alt} />
                </div>
        )
        } else {
            return(
                <div className="listItem__imgbox">
                    <img src={img1} alt={alt} />
                </div>
            )
        }
    }
    
    return (
        <div className='listItem'>
            {imgBox()}
            <div className="lsitItem__header">
                <div className="listItem__title">{title}</div>
                <div className="listItem__date">{date}</div>
            </div>
            <div className="listItem__text">{text}</div>
        </div>
    );
}

export default NewsListItem;
