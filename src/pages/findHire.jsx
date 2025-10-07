import Header from "../components/header";
import Nav from "../components/Nav";
import AdvancedPhoneInput from "../components/phoneNumber";
import Input from "../utils/input";

function FindHirePage() {
  return (
    <>
      <Nav />
      <Header classes={`bg-findHire`}>
        <h1 className="font-poppins-bold mt-6 text-white md:mt-12 mb-2 font-semibold text-[40px] md:text-8xl text-center">
          Meet your next colleagues
        </h1>

        <form className="max-w-[992px] md:mx-auto bg-white mx-4 md:p-8 md:mx-0 font-poppins-regular mt-8">
          <h2 className="w-full p-3 text-2xl md:text-4xl">Contact us</h2>
          <p className="text-[14px] pl-3 flex gap-1 items-center overflow-hidden">
            <span className="text-red-500">*</span>
            <span className="inline-block">indicates a required field</span>
          </p>
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center">
            <Input
              title="First Name"
              name="firstname"
              type="text"
              classes="md:w-1/2"
            />
            <Input
              title="Last Name"
              name="lastname"
              type="text"
              classes="md:w-1/2"
            />
            <Input
              classes="w-full"
              title="Company Email/Personal Email"
              name={`email`}
              type={`email`}
            />
            <Input
              classes="md:w-1/2"
              title="Job Title"
              type="text"
              name="jobTitle"
            />
            <AdvancedPhoneInput
              title="Phone Number"
              name="phoneNumber"
              classes="md:w-1/2"
            />
          </div>
        </form>
      </Header>
    </>
  );
}

export default FindHirePage;
