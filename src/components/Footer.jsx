import { Link } from "react-router";
import logoImg from "../assets/logo.png";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="pb-4">
      <div className="px-4">
        <ul className="flex border-b border-slate-200 *:text-2xl justify-center gap-4 font-poppins-regular py-4">
          <Link to="/about-us">About</Link>
          <Link to="/jobs">Careers</Link>
        </ul>

        <div className="flex justify-center items-center py-18">
          <img src={logoImg} alt="mirana" />
        </div>
        <p className="text-slate-400 text-center"> © 2023 Mirana </p>
        <div className="flex justify-center p-3 *:text-2xl gap-3 text-slate-500 mt-4">
          <Link>
            <FaLinkedinIn />
          </Link>
          <Link>
            <RiTwitterXFill />
          </Link>
          <Link>
            <FaInstagram />
          </Link>
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
