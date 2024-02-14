import React, {FormEvent, useEffect, useState} from 'react';
import cls from './MyAuctionContent.module.scss';
import {AuctionList} from '@entities/auction/ui/auctions-list/AuctionList';
import {useTranslation} from 'react-i18next'
import {AppModal} from '@/shared/ui/modal/AppModal';
import {useMutation, useQuery} from '@apollo/client';
import {CreateMyAuctionDocument} from '@/shared/lib/types/__generated-types__/graphql';
import { GET_AUCTIONS } from '@/shared/schemas/auctions/auctions';


const MyAuctionContent = ({searchValue}: {searchValue: string}) => {
  const [category, setCategory] = useState('active');
  const { t } = useTranslation('myAuctionContent')
  const [createAuction, setCreateAuction] = useState(false)
  const [createMyAuction] = useMutation(CreateMyAuctionDocument)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startingPrice: '',
    finishedAt: '',
  });

  const [minFinishedAtDate, setMinFinishedAtDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const futureDate = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  
    let month = '' + (futureDate.getMonth() + 1),
        day = '' + futureDate.getDate(),
        year = futureDate.getFullYear();
        let hours = futureDate.getHours().toString();
        let minutes = futureDate.getMinutes().toString(); 
        
  
        if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    if (hours.length < 2)
        hours = '0' + hours;
    if (minutes.length < 2)
        minutes = '0' + minutes;
    
    const minDateTime = [year, month, day].join('-') + 'T' + [hours, minutes].join(':');
  
    setMinFinishedAtDate(minDateTime);
  }, []);
  

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  const handleOpenCreateAuction =  () => {
    setCreateAuction(true);
  }

  const handleCreateAuction = async (e: FormEvent) => {
    setCreateAuction(true);

    e.preventDefault();
    try {
      const { data } = await createMyAuction({
        variables: {
          input: {
            title: formData.title,
            description: formData.description,
            startingPrice: Number(formData.startingPrice), 
            finishedAt: formData.finishedAt,
            startedAt: formData.finishedAt,
          },
        },
      });


    } catch (error) {
      console.error('Failed to create auction:', error);
    }
  };


  const categoryButtons = [
    { name: 'active', label: t('Active auctions'),  },
    { name: 'wait', label: t('Announcements'),  },
    { name: 'end', label: t('Inactive auctions'), },

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

  const { loading, data } = useQuery(GET_AUCTIONS, {
    variables: {
        search: searchValue,
    },
});

  const openAuctions = data?.getAuctions.filter(auction => auction.status.name !== 'Open');



  return (
    <div className={cls.myAuctions__content}>
      <div className={cls.myAuctions__btnsgroup}>
        {buttons}
        <button         className={`${cls.myAuction__btn}`}
        onClick={handleOpenCreateAuction}>


          Create auctions
        </button>
       
        {createAuction && <AppModal onClose={setCreateAuction} isOpen={createAuction}>
          <h1 className={cls.title}>Create Auction</h1>
          <form className={cls.create}>

            <div className={cls.create__title}>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            </div>

            <div className={cls.create__descr}>
              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
            </div>

            <div className={cls.create__price}>
              <label htmlFor="startingPrice">Starting Price:</label>
              <input type="number" id="startingPrice" name="startingPrice" 
              required
                value={formData.startingPrice}
                onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value.toString() })} />
            </div>

            <div className={cls.create__finished}>
                <label htmlFor="finishedAt">Finished At:</label>
                <input
                  type="datetime-local"
                  id="finishedAt"
                  name="finishedAt"
                  required
                  value={formData.finishedAt}
                  min={minFinishedAtDate} 
                  onChange={(e) => setFormData({ ...formData, finishedAt: e.target.value })}
                />
              </div>
            <div className={cls.create__button}>
              <button type="submit"
              onClick={handleCreateAuction}>Create Auction</button>
            </div>

          </form>

        </AppModal>}

      </div>
      <AuctionList searchValue={searchValue} dataFilter={openAuctions || []} />
    </div>
  );
};

export default MyAuctionContent;
