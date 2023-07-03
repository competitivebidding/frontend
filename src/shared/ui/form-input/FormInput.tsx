import React, { ChangeEvent } from 'react';
import InputMask from 'react-input-mask';
import cls from './FormInput.module.scss';

interface FormInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    mask?: string;
    maskChar?: string | null;
    pattern?: string | undefined;
    type?: string;
    label: string;
    required?: boolean;
    className?: string;
    title?: string;
    disabled?: boolean;
}

const FormInput = ({
    value,
    onChange,
    placeholder,
    mask,
    maskChar = null,
    pattern = undefined,
    type,
    label,
    required,
    className,
    title,
    disabled,
} : FormInputProps) => {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={ ` ${cls.label} ${className} `}>
            <span>{label}</span>
{
    mask ? (
        <InputMask
            mask={mask}
            placeholder={placeholder}
            maskChar={maskChar}
            value={value}
            onChange={changeHandler}
        >
            {(inputProps: any) => (
                <input
                    {...inputProps}
                    required={required}
                    pattern={pattern}
                    className={cls.label__input}
                    type={type}
                    title={title}
                    disabled={disabled}
                />
            )}
        </InputMask>
    ) : (
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
    )
}
</div >
);
};

export default FormInput;