import React from 'react';
import { Spacer } from 'components';
import { InputFieldProps, TextAreaProps } from 'interfaces';

const InputField = ({
  type,
  placeholder,
  onChange,
  required = false,
  showLabel = false,
}: InputFieldProps) => {
  return (
    <>
      <div className="form__container__input">
        {showLabel && (
          <label className="form__container__input__label">{placeholder}</label>
        )}
        <input
          className="form__container__input__container"
          type={type}
          placeholder={!showLabel && placeholder}
          onChange={onChange}
          required={required}
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
}: TextAreaProps) => {
  return (
    <>
      <div className="form__container__input">
        {showLabel && (
          <label className="form__container__input__label">{placeholder}</label>
        )}
        <textarea
          className="form__container__input__container"
          placeholder={!showLabel && placeholder}
          onChange={onChange}
          required={required}
          rows={rows}
        />
      </div>
      <Spacer block="7" />
    </>
  );
};

export { InputField, TextAreaField };
