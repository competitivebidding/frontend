import * as React from 'react';
import InputMask from "react-input-mask";
import cls from './FormInput.module.scss'

export const FormInput = (props) => {
    const {
        value,
        onChange,
        placeholder,
        mask ,
        maskChar = null,
        pattern = null,
        type,
        label,
        required,
        className,
        title,
        disabled} = props

    const changeHandler = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className={`${cls.label} ${className}`}>
            <span>{label}</span>
            {mask ? <InputMask
                mask={mask}
                placeholder={placeholder}
                maskChar={maskChar}
                value={value}
                onChange={changeHandler}
            >
                {(inputProps) =>
                    <input {...inputProps}
                           required={required}
                           pattern={pattern}
                           className={cls.label__input}
                           type={type}
                           title={title}
                           disabled={disabled}
                    />}
            </InputMask> :
                    <input
                          required={required}
                          pattern={pattern}
                          className={cls.label__input}
                          type={type}
                          value={value}
                          onChange={changeHandler}
                          placeholder={placeholder}
                          title={title}
                          disabled={disabled}
                    />
            }
        </div>
    );
};