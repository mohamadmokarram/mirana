import { useState } from "react";
import { CiSearch as SearchIcon } from "react-icons/ci";
import { jobsActions } from "../store/jobsSlice";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const Select = ({ options, name, id, className = "" }) => {
  const [city, setCity] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleCityChange = e => {
    setCity(e.target.value);
    if (e.target.value === "") {
      dispatch(jobsActions.filter({ city: inputRef.current.value }));
      return;
    }
  };

  const handleSearchClicks = () => {
    dispatch(jobsActions.filter({ city: inputRef.current.value }));
  };

  return (
    <>
      <h2 className="font-poppins-regular text-slate-600 my-3">location</h2>
      <div className="w-full md:w-1/2 flex items-center  mb-4">
        <select
          ref={inputRef}
          id={id}
          onChange={handleCityChange}
          name={name}
          value={city}
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
        <button
          onClick={handleSearchClicks}
          className="flex gap-2 items-center bg-secondary text-white py-3 px-4 ml-2 rounded cursor-pointer">
          Search
          <SearchIcon className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default Select;
