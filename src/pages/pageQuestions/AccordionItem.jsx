import React, {useState, useEffect} from 'react';
import './Question.scss'

function AccordionItem({isClicked}) {
    const [open, setOpen] = useState(isClicked);

    return (
        <div className='accordion__item'>

            <div className='accordion__title--button'>
                <div className="accordion__title" >
                    <h3>How does the auction work?</h3>
                </div>
                <button className="accordion__button" style={{ transform: open ? 'rotate(0deg)' : '' }} onClick={() => setOpen(!open)}></button>
            </div>
            {open && (
                <div className="accordion__content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            )}
        </div>
    );
}

export default AccordionItem;
