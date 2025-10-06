import React, { useState, useCallback } from "react";

const AdvancedPhoneInput = ({ title, classes, id, name }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const validate = useCallback(
    value => {
      if (!touched && value === "") return "";

      if (!value) return "شماره تلفن الزامی است";
      if (!/^\d+$/.test(value)) return "فقط کاراکترهای عددی مجاز هستند";
      if (value.length !== 11) return "شماره تلفن باید ۱۱ رقمی باشد";
      if (!value.startsWith("09")) return "شماره تلفن باید با ۰۹ شروع شود";

      return "";
    },
    [touched]
  );

  const handleChange = e => {
    const value = e.target.value;

    // فقط اعداد مجاز
    if (!/^\d*$/.test(value)) return;

    // محدودیت طول
    if (value.length > 11) return;

    setPhoneNumber(value);

    // اعتبارسنجی بلادرنگ فقط پس از لمس شدن فیلد
    if (touched) {
      setError(validate(value));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validate(phoneNumber));
  };

  const handleFocus = () => {
    if (!touched) {
      setTouched(true);
    }
  };

  const isValid = !error && phoneNumber.length === 11;

  return (
    <div className={`flex flex-col my-6 px-6 pd:mx-0 ${classes}`}>
      <label htmlFor={id} className="text-[13px] mb-1">
        {title}
        <span className="text-red-600 ml-1">*</span>
      </label>
      <input
        type="text"
        value={phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder="09XXXXXXXXX"
        name={name}
        className="py-4 bg-gray-100 border-b border-gray-400 px-2"
      />

      {error && (
        <div className="flex text-center items-center gap-1 text-red-500 text-[13px] mt-1 ">
          <span>⚠</span>
          {error}
        </div>
      )}

      {isValid && (
        <div className="flex items-center gap-1 text-green-500 text-[13px] mt-1 text-center">
          <span>✓</span>
          شماره تلفن معتبر است
        </div>
      )}
    </div>
  );
};

export default AdvancedPhoneInput;
