"use client";
import { useState } from "react";

const DashboardInp = ({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  label,
  multiline = false,
  className = "",
  inputClassName = "",
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-300 mb-2"
        >
          {label}
        </label>
      )}
      <div
        className={`relative w-full border-b-2 ${
          focused ? "border-green-400" : "border-gray-600"
        } transition-colors duration-300`}
      >
        {multiline ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={4}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`bg-transparent outline-none w-full px-4 py-3 text-gray-100 placeholder-gray-500 ${inputClassName}`}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`bg-transparent outline-none w-full px-4 py-3 text-gray-100 placeholder-gray-500 ${inputClassName}`}
          />
        )}
        <span
          className={`absolute right-0 bottom-0 transform translate-y-1/2 ${
            focused ? "translate-y-0 text-green-400" : "translate-y-full text-gray-600"
          } transition-transform duration-300`}
        >
          {required && "*"}
        </span>
      </div>
    </div>
  );
};

export default DashboardInp;
