import React from 'react';

import logo from '../../../public/img/imgNavBar/LogoCircle.svg';
import hammerIco from '../../../public/img/imgNavBar/judge.svg';
import templates from '../../../public/img/imgNavBar/templates.svg';
import token from '../../../public/img/imgNavBar/token.svg';
import star from '../../../public/img/imgNavBar/star.svg';
import cup from '../../../public/img/imgNavBar/cup.svg';
import emoji from '../../../public/img/imgNavBar/emoji.svg';
import calendar from '../../../public/img/imgNavBar/calendar.svg';
import bell from '../../../public/img/imgNavBar/bell.svg';
import flash from '../../../public/img/imgNavBar/flash.svg';
import heart from '../../../public/img/imgNavBar/heart.svg';



const AppNavBar = () => {
  return (
    <nav className="flex flex-col gap-y-[2.6em] py-[20px] px-[17px] border-r border-transparent  shadow-[0px_4px_20px_#000000]">
      <div className="flex items-center gap-5 mx-[10px]">
        <img
          src={logo}
          alt=""
        />
        <h1 className=" text-white font-semibold text-sm uppercase tracking-widest w-10">
          Competitive bidding
        </h1>
      </div>
      <div className="flex flex-col gap-[51px] mx-[22px]">
      <div className="flex flex-col gap-[26px]">
        <a href='' className="flex gap-[1.3em]">
          <img
            src={templates}
            alt=""
          />
          <h3 className='text-white tracking-widest'>Profile</h3>
        </a>
        <a href='' className="flex gap-[1.3em]">
          <img
            src={hammerIco}
            alt=""
          />
          <h3 className='text-white tracking-widest'>Auctions</h3>
        </a>
        <a href='' className="flex gap-[1.3em]">
          <img
            src={token}
            alt=""
          />
          <h3 className='text-white tracking-widest'>Tokens</h3>
        </a>
      </div>
      <div className="flex flex-col gap-[26px]">
        <a href='' className="flex gap-[1.3em]">
          <img
            src={star}
            alt=""
          />
          <h3 className='text-white tracking-widest'>My auctions</h3>
        </a>
        <a href='' className="flex gap-[1.3em]">
          <img
            src={cup}
            alt=""
          />
          <h3 className='text-white tracking-widest'>Winners</h3>
        </a>
        <a href='' className="flex gap-[1.3em]">
          <img
            src={emoji}
            alt=""
          />
          <h3 className='text-white tracking-widest'>Parnter program</h3>
        </a>
      </div>
      <div className="flex flex-col gap-[26px]">
        <a href='' className="flex gap-[1.3em]">
          <img
            src={calendar}
            alt=""
          />
          <h3 className='text-white tracking-widest'>News</h3>
        </a>
        <a href='' className="flex gap-[1.3em]">
          <img
            src={bell}
            alt=""
          />
          <h3 className='text-white tracking-widest'>Notifications</h3>
        </a>
      </div>
      <div className="flex flex-col gap-[26px]">
        <a href='' className="flex gap-[1.3em]">
          <img
            src={flash}
            alt=""
          />
          <h3 className='text-white tracking-widest'>Frequent questions</h3>
        </a>
        <a href='' className="flex gap-[1.3em]">
          <img
            src={heart}
            alt=""
          />
          <h3 className='text-white tracking-widest'>TechSupport</h3>
        </a>
      </div>

      </div>
      <a href="" className=' text-white border w-full text-semibold text-center p-2  bg-[]'>
        Partner Link
      </a>

    </nav>
  );
};

export default AppNavBar;
