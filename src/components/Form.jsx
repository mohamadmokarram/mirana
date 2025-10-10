import { useState } from "react";
import Input from "../utils/input";
import AdvancedPhoneInput from "./phoneNumber";
import { useRef } from "react";
import { useCallback } from "react";

export default function Form() {
  const formRef = useRef(null);
  const [allInputIsFilled, setAllInputIsFilled] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const requiredFields = [
    "firstname",
    "lastname",
    "email",
    "jobTitle",
    "phoneNumber",
  ];

  const handlePhoneValidChange = useCallback(valid => {
    // console.log("valid :", valid);
    setIsPhoneValid(valid);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data); // or sending data to server
  };

  const handleFormChange = () => {
    const formData = new FormData(formRef.current);

    const isComplete = requiredFields.every(field => {
      const val = formData.get(field);
      return val && val.trim() !== "";
    });
    console.log("isComplete: ", isComplete);

    setAllInputIsFilled(isComplete);
  };

  const isEverythingOk = allInputIsFilled && isPhoneValid;
  console.log("isEverythingOk: ", isEverythingOk);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onChange={handleFormChange}
      className="max-w-[992px] md:mx-auto bg-white mx-4 md:p-8 font-poppins-regular mt-8">
      <h2 className="w-full p-3 text-2xl md:text-4xl">Contact us</h2>
      <p className="text-[14px] pl-3 flex gap-1 items-center overflow-hidden">
        <span className="text-red-500">*</span>
        <span className="inline-block">indicates a required field</span>
      </p>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
        <Input
          title="First Name"
          name="firstname"
          id="firstname"
          type="text"
          classes="md:w-1/2"
          required
        />
        <Input
          title="Last Name"
          name="lastname"
          id="lastname"
          type="text"
          classes="md:w-1/2"
          required
        />
        <Input
          classes="w-full"
          title="Company Email/Personal Email"
          name={`email`}
          id="email"
          type={`email`}
          required
        />
        <Input
          classes="md:w-1/2"
          title="Company Name"
          type="text"
          name="companyName"
          required
        />
        <Input
          classes="md:w-1/2"
          title="Job Title"
          type="text"
          name="jobTitle"
          id="jobTitle"
          required
        />
        <AdvancedPhoneInput
          title="Phone Number"
          name="phoneNumber"
          classes="w-full"
          onValidChange={handlePhoneValidChange}
        />
        <Input
          classes="w-full"
          title="Company Website"
          name="companyWebsite"
          placeholder="www.yourcompany.com"
        />
        <Input
          textArea
          classes="md:w-full"
          title="your message"
          placeholder="Enter your message"
          rows="5"
          name="message"
        />
        <button
          disabled={!isEverythingOk}
          type="submit"
          className={`text-white p-3 ${
            !isEverythingOk ? "bg-slate-500" : "bg-secondary"
          } text-left mx-6 mb-6 cursor-pointer`}>
          send Message
        </button>
      </div>
    </form>
  );
}
