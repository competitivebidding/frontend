import React from 'react';

export const AuctionItemCard = ({title, image}) => {
    return (
        <div className="item__card">
            <div className="item__card-title">
                {title}
            </div>
            <div className="item__card-image">
                <img src={image} alt="macbook"/>
            </div>
        </div>
    );
};