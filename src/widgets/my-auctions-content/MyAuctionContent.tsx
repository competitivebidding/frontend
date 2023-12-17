import React, {FormEvent, useState} from 'react';
import cls from './MyAuctionContent.module.scss';
import {AuctionList} from '@entities/auction/ui/auctions-list/AuctionList';
import {useTranslation} from 'react-i18next'
import {AppModal} from '@/shared/ui/modal/AppModal';
import {useMutation} from '@apollo/client';
import {CreateMyAuctionDocument} from '@/shared/lib/types/__generated-types__/graphql';


const MyAuctionContent = ({searchValue}: {searchValue: string}) => {
  const [category, setCategory] = useState('active');
  const { t } = useTranslation('myAuctionContent')
  const [createAuction, setCreateAuction] = useState(false)
  const [createMyAuction] = useMutation(CreateMyAuctionDocument)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startingPrice: 0,
    finishedAt: '',
  });

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
  };

  const handleOpenCreateAuction =  () => {
    setCreateAuction(true);
  }

  const handleCreateAuction = async (e: FormEvent) => {
    setCreateAuction(true);
    console.log('create');
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

      console.log('Auction created:', data);
    } catch (error) {
      console.error('Failed to create auction:', error);
    }
  };


  const categoryButtons = [
    { name: 'active', label: t('Active auctions') },
    { name: 'wait', label: t('Announcements') },
    { name: 'end', label: t('Inactive auctions') },

  ];

  const buttons = categoryButtons.map(({ name, label }) => (
    <>
      {/*говнокод пофиксить*/}
      <button
        key={Math.random()}
        className={`${cls.myAuction__btn} ${category === name ? cls['btn-active'] : cls.btnInactive}`}
        onClick={() => handleCategoryChange(name)}
      >
        {label}
      </button>
      
    </>
  ));

  return (
    <div className={cls.myAuctions__content}>
      <div className={cls.myAuctions__btnsgroup}>{buttons}
        <button
          className={`${cls.myAuction__btn}`}
          onClick={handleOpenCreateAuction}
        >
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
              <input type="number" id="startingPrice" name="startingPrice" required
                value={formData.startingPrice}
                onChange={(e) => setFormData({ ...formData, startingPrice: Number(e.target.value) })} />
            </div>

            <div className={cls.create__finished}>
              <label htmlFor="finishedAt">Finished At:</label>
              <input type="datetime-local" id="finishedAt" name="finishedAt" required 
                  value={formData.finishedAt}
                  onChange={(e) => setFormData({ ...formData, finishedAt: e.target.value })}/>
            </div>

            <div className={cls.create__button}>
              <button type="submit"
              onClick={handleCreateAuction}>Create Auction</button>
            </div>

          </form>

        </AppModal>}

      </div>
      <AuctionList searchValue={searchValue} />
    </div>
  );
};

export default MyAuctionContent;
