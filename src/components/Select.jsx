import { useState } from "react";

/**
 * Select component that renders a select element styled like the Input component.
 * @param {Object} props
 * @param {Array<{value: string, label: string}>} props.options - Options to display in the select dropdown.
 * @param {string} [props.value] - The current selected value.
 * @param {function} [props.onChange] - Change handler function.
 * @param {string} [props.name] - Name attribute for the select element.
 * @param {string} [props.id] - Id attribute for the select element.
 * @param {string} [props.className] - Additional class names to apply.
 * @returns JSX.Element
 */
const Select = ({ options, name, id, className = "" }) => {
  const [city, setCity] = useState("All");

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  return (
    <>
      <h2 className="font-poppins-regular text-slate-600 my-3">location</h2>
      <div className="w-full md:w-1/2 flex items-center mb-4">
        <select
          id={id}
          name={name}
          value={city}
          onChange={handleCityChange}
          className={`w-3/4 py-4 bg-gray-100 border-b border-gray-400 px-2 ${className} w-1/2`}>
          <option key="all" value="">
            All
          </option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button className="bg-secondary text-white py-2 px-4 ml-2 rounded cursor-pointer">
          Search
        </button>
      </div>
    </>
  );
};

export default Select;
