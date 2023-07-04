import React, { SVGProps, useState } from 'react'
import { ReactComponent as Arrow } from '@assets/cabinet/arrow.svg';
import './DropDown.scss';
import { ILang } from 'src/feauters/lang-switcher/LangSwitcher'


interface LangOptions extends ILang {}

interface IDropDownProps {
  data: LangOptions[];
  current: string;
  onChange: (item: string) => void;
  withArrow?: boolean;
}

export const DropDown = ({ data, current, onChange, withArrow = true }: IDropDownProps) => {
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
            {withArrow && <Arrow className={` ${!dropdownVisibility ? 'arrow' : 'arrow arrow--visible'} `} />}
            <span>{current && findFlag(current)}</span>
          </div>
          <div className={` ${dropdownVisibility ? 'dropdown__dropdown' : 'dropdown__dropdown dropdown__dropdown--visible'} `}>
            {data.map((item) => (
              <div key={item.value} className={'dropdown__item'} onClick={() => onChangeValue(item.value)}>
                <img src={item.label} key={item.value}/>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
