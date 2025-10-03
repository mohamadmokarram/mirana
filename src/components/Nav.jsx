import { IoMenuOutline } from "react-icons/io5";
import { MdWifiCalling2 } from "react-icons/md";
import logoImg from "../assets/logo.png";
import { Link } from "react-router";
import MobileMenu from "./mobileMenu";
export default function Nav() {
  return (
    <>
      <div className="w-full bg-white fixed z-20 top-0">
        <section className="container">
          <nav className="grid grid-cols-5">
            {/* logo section */}
            <div className="col-span-full md:col-span-2 lg:col-span-1 flex items-center relative p-3">
              <IoMenuOutline className="text-2xl cursor-pointer lg:hidden" />
              <Link
                className="absolute left-1/2 transform -translate-x-1/2"
                to="/">
                <img src={logoImg} alt="mirana" />
              </Link>
            </div>

            <div className="hidden lg:block lg:col-span-2">
              <ul className="flex flex-row justify-around *:font-poppins-regular font-semibolc p-3">
                <Link className="after-line" to="/find-your-job">
                  Find your next job
                </Link>
                <Link className="after-line" to="/find-your-hire">
                  Find your next hire
                </Link>
                <Link className="after-line" to="/about-us">
                  About
                </Link>
              </ul>
            </div>

            <div className="hidden md:col-span-3 lg:col-span-2 md:flex items-center justify-end">
              <ul className="*:text-[#9a9a9a] *:text-[14px] flex pr-3 gap-3">
                <li className="flex items-center">
                  <MdWifiCalling2 className="mt-1" />
                  <a href="tel:+989214613075">+989214613075</a>
                </li>
                <li>
                  <span>Endorsed & Invested in by:</span>
                  <a
                    className="font-semibold pl-1"
                    href="https://jobvision.ir/">
                    JOBVISION
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
      <MobileMenu />
    </>
  );
}
