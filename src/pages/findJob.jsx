import Nav from "../components/Nav";
import { LuUserRoundSearch } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineUpload } from "react-icons/ai";
import {
  MdOutlineAdsClick as ClickIcon,
  MdOutlineHandshake as HireIcon,
  MdOutlineManageSearch as SearchJobIcon,
} from "react-icons/md";
import { SiHyperskill as SkillsIcon } from "react-icons/si";
import { RiInboxUnarchiveLine as InboxIcon } from "react-icons/ri";
import { IoChatboxEllipsesOutline as MeetIcon } from "react-icons/io5";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router";
import Feature from "../utils/feature.jsx";
import Header from "../components/header.jsx";
import Main from "../components/mainContent/Main-content.jsx";
import GridSection from "../components/mainContent/Grid-section.jsx";

function FindJobPage() {
  return (
    <>
      <Nav />
      <Header classes={`bg-findjob min-h-[90vh]`}>
        <h1 className="font-poppins-bold mt-6 text-secondary md:mt-12 mb-2 font-semibold text-[40px] md:text-8xl text-center">
          Opportunities.
        </h1>
        <p className="text-center font-poppins-regular text-xl md:text-3xl py-2 md:pt-6">
          Two easy way to find them.
        </p>

        <section className="flex mt-4 px-3 md:px-0 flex-col gap-4 md:gap-8 md:mt-8 md:flex-row md:justify-center">
          <div className="bg-white md:px-12 lg:w-[400px]">
            <div className="flex pt-10 pb-6 justify-center items-center">
              <LuUserRoundSearch className="text-4xl" />
            </div>
            <h2 className="text-center font-poppins-regular text-slate-600 text-xl">
              Search available jobs
            </h2>
            <Link
              to="/jobs"
              className="w-fit lg:w-3/5 text-white bg-secondary mx-auto  font-poppins-bold py-2 px-3 my-4 flex justify-center items-center gap-2">
              <span>Search Jobs</span>
              <FaArrowRight />
            </Link>
          </div>

          <div className="bg-white md:px-12 lg:w-[400px]">
            <div className="flex pt-10 pb-6 justify-center items-center">
              <AiOutlineUpload className="text-4xl" />
            </div>
            <h2 className="text-center font-poppins-regular text-slate-600 text-xl">
              Upload your resume
            </h2>
            <Link className="w-fit lg:w-3/5 text-white bg-secondary mx-auto  font-poppins-bold py-2 px-3 my-4 flex justify-center items-center gap-2">
              <span>Upload</span>
              <FaArrowRight />
            </Link>
          </div>
        </section>
      </Header>

      <Main title="What happens" titleColor="text-slate-600">
        <p className="w-4/5 mx-auto py-6 text-center font-poppins-bold lg:font-poppins-extraLight lg:text-3xl text-slate-800">
          We are next to you, throughout the entire process
        </p>
        <GridSection>
          <Feature
            icon={SearchJobIcon}
            title="Search for a job"
            desc="Search through all the jobs across various job types &
                industries."
          />
          <Feature
            icon={SkillsIcon}
            title="Match your skills"
            desc="Read through the description to see if your skills and
                experiences are a match.."
          />
          <Feature
            icon={ClickIcon}
            title="Click “apply”"
            desc="Apply to as many jobs as you think are suitable for you. Submit
                your contact & resume."
          />
          <Feature
            icon={InboxIcon}
            title="Check your inbox"
            desc="We will email you if your resume was short-listed & we’ll call
                you for the next step. If non happened, don’t worry. We have you
                well sited in our talent pool."
          />
          <Feature
            icon={MeetIcon}
            title="Meet & interview"
            desc=" After our chat, we will introduce you to the employer and you will be assessed in their internal hiring process. "
          />
          <Feature
            icon={HireIcon}
            title="Get hired"
            desc=" After the interview process, you’ll find out shortly if you’ve been hired."
          />
        </GridSection>
      </Main>

      <Footer />
    </>
  );
}

export default FindJobPage;
