import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router";
export default function SocialIcons({ classes }) {
  return (
    <div className={`flex text-slate-500 p-3 gap-3 *:text-2xl ${classes}`}>
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
  );
}
