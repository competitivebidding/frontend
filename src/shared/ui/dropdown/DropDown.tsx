import React, { useState, useEffect, useRef } from 'react';
import arrow from '@assets/cabinet/arrow.svg';
import cls from './DropDown.module.scss';
import { ILang } from '@features/lang-switcher/LangSwitcher';

interface LangOptions extends ILang { }

interface IDropDownProps {
  data: LangOptions[];
  current: string;
  onChange: (item: string) => void;
  withArrow?: boolean;
}

export const DropDown = ({ data, current, onChange, withArrow = true }: IDropDownProps) => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const onChangeValue = (item: string) => {
    onChange(item);
    setDropdownVisibility(false);
  };

  const findFlag = (v: string) => {
    const c = data.find((obj) => obj.value === v)
    return c ? c.label : '';
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisibility(false);
      }
    }

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={cls.dropdown} ref={dropdownRef}>
      <div className={cls.dropdown__current} onClick={() => setDropdownVisibility(!dropdownVisibility)}>
        {withArrow && <img src={arrow} className={` ${!dropdownVisibility ? cls.arrow : `${cls.arrow} ${cls['arrow--visible']}`} `} />}
        <img src={current && findFlag(current)} alt={'language'} width={35} height={35} />
      </div>
      <div
        className={` ${dropdownVisibility ? cls.dropdown__dropdown : `${cls.dropdown__dropdown} ${cls['dropdown__dropdown--visible']}`
          } `}
      >
        {data.map((item) => (
          <div key={item.value} className={cls.dropdown__item} onClick={() => onChangeValue(item.value)}>
            <img src={item.label} key={item.value} />
          </div>
        ))}
      </div>
    </div>
  );
};
