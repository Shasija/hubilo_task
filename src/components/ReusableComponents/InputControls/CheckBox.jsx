import React from "react";
const Checkbox = (props) => {
  const {
    id,
    type,
    className,
    name,
    defaultValue,
    autoFocus,
    required,
    readOnly,
    noClass,
    disabled,
    reference,
    onKeyPress,
    onChange,
    onClick,
    onBlur,
    checked,
  } = props;
  return (
    <input
      id={id ? id : ""}
      type={type ? type : "checkbox"}
      defaultValue={defaultValue ? defaultValue : ""}
      name={name ? name : ""}
      autoFocus={autoFocus ? true : false}
      required={required ? required : null}
      className={noClass ? "" : className ? className : "form-control"}
      disabled={disabled ? true : false}
      ref={reference ? reference : null}
      onKeyPress={onKeyPress ? onKeyPress : null}
      onChange={onChange ? onChange : null}
      onClick={onClick ? onClick : null}
      onBlur={onBlur ? onBlur : null}
      readOnly={readOnly ? "readonly" : ""}
      checked={checked ? true : false}
    />
  );
};

export default Checkbox;
