import React from "react";

const Input = ({
  label,
  placeholder,
  name,
  value,
  handleChange,
  type,
  onBlur,
  error,
  touch,
}) => {
  return (
    <div className="mb-[21px] ">
      <label htmlFor={name} className="font-normal text-[20.7px] text-gray-500 pl-3">
        {label}
      </label>
      <br />
      <input
        id={name}
        type={type}
        className={` border-2 focus:outline-none w-[339px] h-[51px] rounded-lg   pl-3  ${
          error && touch ? "border-[red]" : "border-[#53352d80]" 
        }`}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
      />
      {error && touch && <p className="text-[red] pl-3">{error}</p>}
    </div>
  );
};

export default Input;
