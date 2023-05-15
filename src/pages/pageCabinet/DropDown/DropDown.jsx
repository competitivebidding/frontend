import * as React from 'react';
import arrow from '@/assets/cabinet/arrow.svg'
import './DropDown.scss'

export const DropDown = ({data, current, onChange}) => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    return (
        <>
            {data &&
                <div className={'dropdown'}>
                    <div className={'dropdown__current'} onClick={() => setDropdownVisibility(!dropdownVisibility)}>
                        <img src={arrow}
                            className={!dropdownVisibility ? 'arrow' : 'arrow' + ' ' + 'arrow--visible'}
                            alt='arrow'/>
                        <span>{current && current.title}</span>
                    </div>
                    <div
                        className={dropdownVisibility ? 'dropdown__dropdown' : 'dropdown__dropdown' + ' ' + 'dropdown__dropdown--visible'}>
                        {data.map(item => (
                            <div key={item.val} className={'dropdown__item'}
                                 onClick={() => {
                                     onChange(item)
                                     setDropdownVisibility(!dropdownVisibility)
                                 }}>
                                {item.title}
                            </div>
                        ))}

                    </div>
                </div>
            }</>
    );
};