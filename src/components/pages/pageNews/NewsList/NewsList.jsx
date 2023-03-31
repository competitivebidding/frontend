import React from 'react';
import NewsListItem from '../NewsList-item/NewsList-item';
import './NewsList.scss';


const NewsList = ({data}) => {

    const listItem = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <NewsListItem key={id} {...itemProps} />
        )
    })

    return (
        <div className='newsList'>
            {listItem}
        </div>
    );
}

export default NewsList;
