import { Link } from "react-router";
import SocialIcons from "./SocialIcons";
import { MdWifiCalling2 } from "react-icons/md";

export default function MobileMenu() {
  return (
    <section className="fixed  top-0 left-0 w-full h-full showme z-10 bg-slate-800/50">
      <div
        id="backdrop"
        className="w-3/4 flex flex-col overflow-hidden h-full bg-white">
        <ul className="mt-20 *:pl-4  *:text-[14px] text-slate-600 *:font-poppins-regular">
          <li>
            <Link className="block pb-6 w-full" to="/find-your-job">
              Find your next job
            </Link>
          </li>
          <li>
            <Link className="block pb-6 w-full" to="/find-your-hire">
              Find your next hire
            </Link>
          </li>
          <li>
            <Link className="block pb-6 w-full" to="/about-us">
              About
            </Link>
          </li>
        </ul>

        <div className="mt-auto pb-6">
          <SocialIcons />

          <ul className="*:text-[#9a9a9a] pl-3 *:text-[14px] flex flex-col">
            <li className="flex items-center">
              <MdWifiCalling2 className=" text-gray-500 text-[15px]" />
              <a href="tel:+989214613075">+989214613075</a>
            </li>
            <li>
              <span>Endorsed & Invested in by:</span>
              <a className="font-semibold pl-1" href="https://jobvision.ir/">
                JOBVISION
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
