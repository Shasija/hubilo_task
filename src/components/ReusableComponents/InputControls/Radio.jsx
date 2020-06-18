import React from "react";
const Radio = (props) => {
  const {
    id,
    type,
    className,
    name,
    value,
    autoFocus,
    required,
    checked,
    readOnly,
    noClass,
    disabled,
    reference,
    onKeyPress,
    onChange,
    onBlur,
  } = props;

  return (
    <input
      id={id ? id : ""}
      type={type ? type : "radio"}
      name={name ? name : ""}
      autoFocus={autoFocus ? true : false}
      value={value ? value : ""}
      required={required ? true : false}
      checked={checked ? true : false}
      className={noClass ? "" : className ? className : "form-control"}
      disabled={disabled ? true : false}
      ref={reference ? reference : null}
      onKeyPress={onKeyPress ? onKeyPress : null}
      onChange={(event) => (onChange ? onChange(event) : null)}
      onBlur={onBlur ? onBlur : null}
      readOnly={readOnly ? "readonly" : ""}
    />
  );
};

export default Radio;
