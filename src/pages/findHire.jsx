import Form from "../components/Form";
import GridSection from "../components/mainContent/Grid-section";
import Header from "../components/header";
import Main from "../components/mainContent/Main-content.jsx";
import Nav from "../components/Nav";
import Feature from "../utils/feature";
import { FaUserFriends as friendIcon } from "react-icons/fa";
import {
  VscActivateBreakpoints as attractIcon,
  VscSourceControl as sourceIcon,
} from "react-icons/vsc";
import {
  MdShortText as shortListIcon,
  MdOutlineAssessment as assessIcon,
} from "react-icons/md";
import { LiaHireAHelper as hireIcon } from "react-icons/lia";
import Footer from "../components/Footer";
import findHireHeaderImg from "../assets/timon-studler-C4KNMGZ7.png";

function FindHirePage() {
  return (
    <>
      <link rel="preload" as="image" href={findHireHeaderImg} />
      <Nav />
      <Header classes={`bg-findHire pb-10`}>
        <h1 className="font-poppins-bold mt-6 text-white md:mt-12 mb-2 font-semibold text-[40px] md:text-8xl text-center">
          Meet your next colleagues
        </h1>
        <Form />
      </Header>
      <Main title="What happens" titleColor="text-secondary">
        <p className="w-4/5 mx-auto py-6 text-center font-poppins-bold lg:font-poppins-extraLight lg:text-3xl text-slate-800">
          We are next to you, throughout the entire process
        </p>
        <GridSection>
          <Feature
            icon={friendIcon}
            title="Onboard"
            desc="We will first get to know you. Your company, your culture & what you need. "
          />
          <Feature
            icon={attractIcon}
            title="Attract"
            desc=" We use every possible touch point from our website, social and high demand job boards to attract top talents. "
          />
          <Feature
            icon={sourceIcon}
            title="Source"
            desc=" Leveraging our massive talent pool & experience we will also approach passive candidates "
          />
          <Feature
            icon={shortListIcon}
            title="Short-list"
            desc=" We’ll get in touch with each & every suitable candidate to make sure they are a good fit for the role and are also open to discuss new opportunities "
          />
          <Feature
            icon={assessIcon}
            title="Assess"
            desc=" You’ll receive our short-listed candidates to meet & assess through your internal process  "
          />
          <Feature icon={hireIcon} title="Hire" desc=" There you go." />
        </GridSection>
      </Main>
      <Footer />
    </>
  );
}

export default FindHirePage;
