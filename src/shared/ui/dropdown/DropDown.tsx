import React, { useState } from 'react';
import { ReactComponent as Arrow } from '@assets/cabinet/arrow.svg';
import './DropDown.scss';

interface Option {
value: string;
label: string;
}

interface IDropDownProps {
data: Option[];
current: string;
onChange: (item: string) => void;
withArrow?: boolean;
}

const DropDown = ({ data, current, onChange, withArrow = true }: IDropDownProps) => {
const [dropdownVisibility, setDropdownVisibility] = useState(false);

const onChangeValue = (item: string) => {
onChange(item);
setDropdownVisibility(false);
};

const findFlag = (v: string) => {
const c = data.find((obj) => obj.value === v);
return c ? c.label : '';
};

return (
<>
{data && (
<div className={'dropdown'}>
<div className={'dropdown__current'} onClick={() => setDropdownVisibility(!dropdownVisibility)}>
{withArrow && <Arrow className={ ` ${!dropdownVisibility ? 'arrow' : 'arrow arrow--visible'} `} />}
<span>{current && findFlag(current)}</span>
</div>
<div className={` ${dropdownVisibility ? 'dropdown__dropdown' : 'dropdown__dropdown dropdown__dropdown--visible'} `}>
{data.map((item) => (
<div key={item.value} className={'dropdown__item'} onClick={() => onChangeValue(item.value)}>
{item.label}
</div>
))}
</div>
</div>
)}
</>
);
};

export default DropDown;