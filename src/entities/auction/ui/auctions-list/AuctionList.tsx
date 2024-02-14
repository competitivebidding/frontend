import React, { useState, useMemo, useCallback } from 'react';
import AuctionCard from '../auction-card/AuctionCard';
import '../auction-page-content/AuctionsPageContent.module.scss';
import { useQuery } from '@apollo/client';
import { GetAuctionsDocument } from '@shared/lib/types/__generated-types__/graphql';
import cls from './AuctionList.module.scss';
import arrowNext from '@/assets/imgAuctions/arrowNext.svg'
import arrowPrev from '@/assets/imgAuctions/arrowPrev.svg'
import iconLoader from "@assets/Chat/iconLoader.svg"

interface IAuctionSliderProps {
  dataFilter: any[];
  searchValue: string;
}

export const AuctionList = ({ searchValue, dataFilter }: IAuctionSliderProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  const { data, loading } = useQuery(GetAuctionsDocument, {
    variables: {
      search: searchValue,
    },
  });

  const filteredAuctions = useMemo(() => {
    return (
      data?.getAuctions?.filter((card) =>
        dataFilter.some((filter) => filter.status === card.status)
      ) || []
    );
  }, [data, dataFilter]);

  const totalPages = useMemo(() => Math.ceil(filteredAuctions.length / ITEMS_PER_PAGE), [filteredAuctions]);

  const auctionsToDisplay = useMemo(() => {
    return filteredAuctions.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );
  }, [currentPage, filteredAuctions]);

  const handlePagination = useCallback((action: number | string) => {
    if (action === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (action === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (typeof action === 'number') {
      setCurrentPage(action);
    }
  }, [currentPage, totalPages]);

  const paginationItems = useMemo(() => {
    const items: (number | string)[] = [];

    items.push(1);

    let startPage = Math.max(2, currentPage, currentPage > 2 ? currentPage : 2);
    let endPage = Math.min(totalPages - 1, currentPage + 1, currentPage < totalPages - 2 ? currentPage + 1 : totalPages - 1);


    if (currentPage >= 3) {
      endPage = Math.min(totalPages - 1, currentPage, currentPage < totalPages - 2 ? currentPage : totalPages - 1);

    }

    if (startPage > 2) items.push('...');

    for (let i = startPage; i <= endPage; i++) {
      items.push(i);
    }

    if (endPage < totalPages - 1) items.push('...');

    if (totalPages > 1) items.push(totalPages);

    return items;
  }, [totalPages, currentPage]);


  if (loading) return (
    <div className='spinner'>
                <img src={iconLoader} alt="Spinner" />
            </div>
  );
  if (!data) return null;

  return (
    <div>
      <div className={cls.auctionList}>
        {auctionsToDisplay.map((card) => (
          <AuctionCard
            key={card.id}
            id={card.id}
            title={card.title}
            bids={card.bids}
            startedAt={card.startedAt}
            finishedAt={card.finishedAt}
          />
        ))}
      </div>
      <div className={cls.paginationControls}>
        <button
          onClick={() => handlePagination('prev')}
          className={`${cls.controlButton} ${currentPage === 1 ? cls.disabled : ''}`}
          disabled={currentPage === 1}
        >
          <img src={arrowPrev} alt="arrow prev" />
        </button>
        <div className={cls.paginationContainer}>
          {paginationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => typeof item === 'number' && handlePagination(item)}
              className={`${cls.pageButton} ${currentPage === item ? cls.activePage : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePagination('next')}
          className={`${cls.controlButton} ${currentPage === totalPages ? cls.disabled : ''}`}
          disabled={currentPage === totalPages}
        >
          <img src={arrowNext} alt="arrow next" />
        </button>
      </div>
    </div>
  );
};
