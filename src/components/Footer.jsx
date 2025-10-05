import { Link } from "react-router";
import logoImg from "../assets/logo.png";

import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="pb-4 container">
      <div className="px-4">
        <ul className="flex border-b border-slate-200 *:text-[16px] justify-center md:justify-start gap-4 font-poppins-regular py-4">
          <Link className="py-4" to="/about-us">
            About
          </Link>
          <Link className="py-4" to="/jobs">
            Careers
          </Link>
        </ul>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col md:flex-row md:items-center ">
            <figure className="flex justify-center items-center py-18">
              <img src={logoImg} alt="mirana" />
            </figure>
            <p className="text-slate-400 text-center"> © 2023 Mirana </p>
          </div>

          <SocialIcons classes="justify-center mt-4 md:mt-0" />
        </div>

        <p className="text-slate-500 text-center text-[13px]">
          <span>Endorsed & Invested in by:</span>
          <a className="font-semibold pl-1" href="https://jobvision.ir/">
            JOBVISION
          </a>
        </p>
      </div>
    </footer>
  );
}
