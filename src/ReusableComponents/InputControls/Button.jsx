import React from "react";
const Button = (props) => {
  const {
    id,
    type,
    className,
    value,
    noClass,
    onClick,
    style,
    disabled,
  } = props;
  return (
    <button
      id={id ? id : ""}
      type={type ? type : "button"}
      className={noClass ? "" : className ? "btn " + className : "btn"}
      onClick={onClick ? onClick : null}
      style={style || null}
      value={value || null}
      disabled={disabled ? true : false}
    >
      {props.children}
    </button>
  );
};

export default Button;
