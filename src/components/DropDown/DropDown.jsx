import * as React from 'react';
import arrow from '@/assets/cabinet/arrow.svg'
import './DropDown.scss'
//TODO: @D9m0n4 добавить SVGR в конфиг Vite для того что бы импортировать SVG как ReactComponent

export const DropDown = ({data, current, onChange}) => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    const onChangeValue = (item) => {
        onChange(item)
        setDropdownVisibility(false)
    }
    return (
        <>
            {data &&
                <div className={'dropdown'}>
                    <div className={'dropdown__current'} onClick={() => setDropdownVisibility(!dropdownVisibility)}>
                        <img src={arrow}
                            className={`${!dropdownVisibility ? 'arrow' : 'arrow arrow--visible'} `}
                            alt='arrow'/>
                        <span>{current && current.title}</span>
                    </div>
                    <div
                        className={`${dropdownVisibility ? 'dropdown__dropdown' : 'dropdown__dropdown dropdown__dropdown--visible'}`}>
                        {data.map(item => (
                            <div key={item.val} className={'dropdown__item'}
                                 onClick={() => onChangeValue(item)}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>
            }</>
    );
}