import React, { useState } from 'react';
import './Question.scss'

const Question = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  }

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  }

  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  }

  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
  }

  const toggleAccordion5 = () => {
    setIsOpen5(!isOpen5);
  }

  const toggleAccordion6 = () => {
    setIsOpen6(!isOpen6);
  }

  const toggleAccordion7 = () => {
    setIsOpen7(!isOpen7);
  }

  const toggleAccordion8 = () => {
    setIsOpen8(!isOpen8);
  }

  const toggleAccordion9 = () => {
    setIsOpen9(!isOpen9);
  }

  const toggleAccordion10 = () => {
    setIsOpen10(!isOpen10);
  }


  return (
    <div className="accordion">
      <div className='accordion__item' style={{ borderTop: '0' }}>

        <div className='accordion__title--button'>
          <div className="accordion__title" >
            <h3>How does the auction work?</h3>
          </div>
          <button className="accordion__button" style={{ transform: isOpen1 ? 'rotate(0deg)' : '' }} onClick={toggleAccordion1}></button>
        </div>
        {isOpen1 && (
          <div className="accordion__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        )}
      </div>

      <div className='accordion__item'>
        <div className='accordion__title--button'>
          <div className="accordion__title" >
            <h3>What countries do you work in?</h3>
          </div>
          <button className="accordion__button" style={{ transform: isOpen2 ? 'rotate(0deg)' : '' }} onClick={toggleAccordion2}></button>
        </div>
        {isOpen2 && (
          <div className="accordion__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        )}
      </div>

      <div className='accordion__item'>
        <div className='accordion__title--button'>
          <div className="accordion__title" >
            <h3>All equipment is original and new?</h3>
          </div>
          <button className="accordion__button" style={{ transform: isOpen3 ? 'rotate(0deg)' : '' }} onClick={toggleAccordion3}></button>
        </div>
        {isOpen3 && (
          <div className="accordion__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        )}
      </div>

      <div className='accordion__item'>
        <div className='accordion__title--button'>
          <div className="accordion__title" >
            <h3>How can I be sure that I will not be cheated?</h3>
          </div>
          <button className="accordion__button" style={{ transform: isOpen4 ? 'rotate(0deg)' : '' }} onClick={toggleAccordion4}></button>
        </div>
        {isOpen4 && (
          <div className="accordion__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        )}
      </div>

      <div className='accordion__item'>
        <div className='accordion__title--button'>
          <div className="accordion__title" >
            <h3>Why are the lots so cheap?</h3>
          </div>
          <button className="accordion__button" style={{ transform: isOpen5 ? 'rotate(0deg)' : '' }} onClick={toggleAccordion5}></button>
        </div>
        {isOpen5 && (
          <div className="accordion__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        )}
      </div>

      <div className='accordion__item'>
        <div className='accordion__title--button'>
          <div className="accordion__title" >
            <h3>Is this a casino?</h3>
          </div>
          <button className="accordion__button" style={{ transform: isOpen6 ? 'rotate(0deg)' : '' }} onClick={toggleAccordion6}></button>
        </div>
        {isOpen6 && (
          <div className="accordion__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        )}
      </div>

      <div className='accordion__item'>
        <div className='accordion__title--button'>
          <div className="accordion__title" >
            <h3>Can I enter someone else's Instagram profile when registering?</h3>
          </div>
          <button className="accordion__button" style={{ transform: isOpen7 ? 'rotate(0deg)' : '' }} onClick={toggleAccordion7}></button>
        </div>
        {isOpen7 && (
          <div className="accordion__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        )}
      </div>

      <div className='accordion__item'>
        <div className='accordion__title--button'>
          <div className="accordion__title" >
            <h3>Who is responsible for the quality of the goods?</h3>
          </div>
          <button className="accordion__button" style={{ transform: isOpen8 ? 'rotate(0deg)' : '' }} onClick={toggleAccordion8}></button>
        </div>
        {isOpen8 && (
          <div className="accordion__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        )}
      </div>


      <div className='accordion__item'>
        <div className='accordion__title--button'>
          <div className="accordion__title" >
            <h3>Can I choose the color of my phone or other equipment?</h3>
          </div>
          <button className="accordion__button" style={{ transform: isOpen9 ? 'rotate(0deg)' : '' }} onClick={toggleAccordion9}></button>
        </div>
        {isOpen9 && (
          <div className="accordion__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        )}
      </div>


      <div className='accordion__item'>
        <div className='accordion__title--button'>
          <div className="accordion__title" >
            <h3>What is not allowed on an online auction platform?</h3>
          </div>
          <button className="accordion__button" style={{ transform: isOpen10 ? 'rotate(0deg)' : '' }} onClick={toggleAccordion10}></button>
        </div>
        {isOpen10 && (
          <div className="accordion__content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        )}
      </div>
    </div>
  );
};


export default Question;
