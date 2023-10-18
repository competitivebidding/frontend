import React, { useCallback, useEffect, useState } from 'react';
import cls from './Filter.module.scss';

import arrowGrey from '../../assets/imgAuctions/arrowGrey.svg';
import arrowFilter from '../../assets/imgAuctions/arrowFilter.svg';
import cross from '../../assets/imgAuctions/cross.svg';
import { useTranslation } from 'react-i18next'

const Filter = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState<boolean>(true);
  const [isBrandVisible, setIsBrandVisible] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { t } = useTranslation('auctionsPage')

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 1000);
    window.innerWidth < 1000 ? setIsVisible(false) : '';
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <div className={cls.filter}>
        <div className={cls['filter__header']}>
          <h2 className={cls['filter__title']}>{t('Filtering')}</h2>
          <span className={`${cls['filter__hide']} ${isMobile ? '' : cls['hidden']}`} onClick={() => setIsVisible(!isVisible)}>
          <div className={cls['filter__block-arrowImg']}>
            <img src={arrowGrey} alt="arrow" className={`${cls['filter__arrow']} ${isVisible ? cls['rotate'] : ''}`} />
          </div>
        </span>
        </div>
        {isVisible && (
            <>
              <div className={cls.selected}>
                <h3 className={cls['filter__selected']}>{t('Selected Categories')}:</h3>
                <div className={cls['select__categories']}>
                  {t('Brand')}
                  <div className={cls['select__img']}>
                    <img src={cross} alt="cross" />
                  </div>
                </div>
              </div>

              <div className={cls['categories']}>
                <h3 className={cls['categories__title']}>{t('Categories')}:</h3>
                <span className={cls['categories__arrow']} onClick={() => setIsCategoriesVisible(!isCategoriesVisible)}>
              <img src={arrowFilter} alt="arrow" className={`${cls['filter__arrow']} ${isCategoriesVisible ? cls['rotate'] : ''}`} />
            </span>
              </div>

              <div className={cls['filter__categories']} style={{ display: isCategoriesVisible ? 'block' : 'none' }}>
                <label className={cls['checkbox__container']}>
                  <input type="checkbox" name="category" value="all" />
                  <span className={cls['checkmark']}></span>
                  {t('All categories')}
                </label>

                <label className={cls['checkbox__container']}>
                  <input type="checkbox" name="category" value="gadgets" />
                  <span className={cls['checkmark']}></span>
                  Gadgets
                </label>

                <label className={cls['checkbox__container']}>
                  <input type="checkbox" name="category" value="electronics" />
                  <span className={cls['checkmark']}></span>
                  Electronics
                </label>
              </div>

              <div className={cls['brand']}>
                <h3 className={cls['brand__title']}>{t('Brand')}:</h3>
                <span className={`${cls['brand__arrow']}`} onClick={() => setIsBrandVisible(!isBrandVisible)}>
              <img src={arrowFilter} alt="arrow" className={`${cls['filter__arrow']} ${isBrandVisible ? cls['rotate'] : ''}`} />
            </span>
              </div>

              <div className={cls['filter__brands']} style={{ display: isBrandVisible ? 'block' : 'none' }}>
                <input type="text" placeholder={t('Search') as string} />

                <label className={cls['checkbox__container']}>
                  <input type="checkbox" name="brand" value="apple" />
                  <span className={cls['checkmark']}></span>
                  Apple
                </label>

                <label className={cls['checkbox__container']}>
                  <input type="checkbox" name="brand" value="samsung" />
                  <span className={cls['checkmark']}></span>
                  Samsung
                </label>
                <label className={cls['checkbox__container']}>
                  <input type="checkbox" name="brand" value="Xiaomi" />
                  <span className={cls['checkmark']}></span>
                  Xiaomi
                </label>
              </div>
            </>
        )}
      </div>
  );
};

export default Filter;
