import React from 'react';
import { Spacer } from 'components';
import {
  InputFieldProps,
  SelectInputFieldProps,
  TextAreaProps,
} from 'interfaces';

const InputField = ({
  type,
  placeholder,
  onChange,
  required = false,
  showLabel = false,
  autoFocus = false,
  value = '',
}: InputFieldProps) => {
  return (
    <>
      <div className="form__container__input">
        {showLabel && (
          <label className="form__container__input__label">
            {placeholder}
            {required && <sup>*</sup>}
          </label>
        )}
        <input
          className="form__container__input__container"
          type={type}
          placeholder={!showLabel ? placeholder : ''}
          onChange={onChange}
          required={required}
          autoFocus={autoFocus}
          value={value}
        />
      </div>
      <Spacer block="7" />
    </>
  );
};

const TextAreaField = ({
  placeholder,
  onChange,
  required = false,
  rows = 4,
  showLabel = false,
  value = '',
}: TextAreaProps) => {
  return (
    <>
      <div className="form__container__input">
        {showLabel && (
          <label className="form__container__input__label">
            {placeholder}
            {required && <sup>*</sup>}
          </label>
        )}
        <textarea
          className="form__container__input__container"
          placeholder={!showLabel && placeholder}
          onChange={onChange}
          required={required}
          rows={rows}
          value={value}
        />
      </div>
      <Spacer block="7" />
    </>
  );
};

const SelectInputField = ({
  showLabel,
  placeholder,
  selectOptions,
  noOptionsText,
  selectedOptionKey,
  onChange,
}: SelectInputFieldProps) => {
  return (
    <>
      <div className="form__container__input">
        {showLabel && (
          <label className="form__container__input__label">{placeholder}</label>
        )}
        {selectOptions.length > 0 ? (
          <select className="form__container__select" onChange={onChange}>
            {selectOptions.map((option, index) => {
              const { label, value } = option;
              return (
                <option
                  value={value}
                  className="form__container__select__option"
                  key={index}
                  defaultChecked={index === 0}
                  selected={selectedOptionKey === value}
                >
                  {label}
                </option>
              );
            })}
          </select>
        ) : (
          <p className="form__container__select__emptytext pre-text">
            {noOptionsText}
          </p>
        )}
      </div>
      <Spacer block="7" />
    </>
  );
};

export { InputField, TextAreaField, SelectInputField };
