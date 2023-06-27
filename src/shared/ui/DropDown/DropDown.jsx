import * as React from 'react';
import {ReactComponent as Arrow} from '@assets/cabinet/arrow.svg'
import './DropDown.scss'

export const DropDown = ({data, current, onChange, withArrow = true}) => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    const onChangeValue = (item) => {
        onChange(item)
        setDropdownVisibility(false)
    }

    const findFlag = (v) => {
        const c = data.find(obj => obj.value === v)
        return c ? c.label : ''
    }

    return (
        <>
            {data &&
                <div className={'dropdown'}>
                    <div className={'dropdown__current'} onClick={() => setDropdownVisibility(!dropdownVisibility)}>
                        {withArrow && <Arrow className={`${!dropdownVisibility ? 'arrow' : 'arrow arrow--visible'} `}/>}
                        <span>{current && findFlag(current)}</span>
                    </div>
                    <div
                        className={`${dropdownVisibility ? 'dropdown__dropdown' : 'dropdown__dropdown dropdown__dropdown--visible'}`}>
                        {data.map(item => (
                            <div key={item.value} className={'dropdown__item'}
                                 onClick={() => onChangeValue(item.value)}>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
            }</>
    );
}
