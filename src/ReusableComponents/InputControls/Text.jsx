import React from "react";
const Text = (props) => {
  const {
    id,
    type,
    className,
    name,
    readOnly,
    noClass,
    value,
    placeholder,
    disabled,
    reference,
    pattern,
    onKeyPress,
    onKeyUp,
    onChange,
    onBlur,
    maxLength,
    required,
    onFocus,
  } = props;
  return (
    <input
      id={id ? id : ""}
      type={type ? type : "text"}
      className={noClass ? "" : className ? className : "form-control"}
      name={name ? name : ""}
      value={value ? value : ""}
      placeholder={placeholder ? placeholder : ""}
      disabled={disabled ? true : false}
      ref={reference ? reference : null}
      pattern={pattern ? pattern : null}
      onKeyPress={onKeyPress ? onKeyPress : null}
      onKeyUp={onKeyUp ? onKeyUp : null}
      onChange={onChange ? onChange : null}
      onBlur={onBlur ? onBlur : null}
      readOnly={readOnly ? "readonly" : ""}
      maxLength={maxLength ? maxLength : null}
      required={required ? required : null}
      onFocus={onFocus ? onFocus : null}
    />
  );
};

export default Text;
