import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
      <div className="navbar text-white ">
        <div className="navbar-start text-3xl">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-rose-300 rounded-box w-20 text-3xl"
            >
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/work">Work</Link>
              </li>

              <li>
                <Link href="/skills">Skills</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-rose-300">Claudia S.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>

            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex space-x-4">
            <a href="https://www.linkedin.com/in/claudia-solis-48599422a/" target="_blank">
          <button className="text-2xl">
            <FaLinkedin />
          </button>
          </a>
          <a href="https://github.com/cjsolis12" target="_blank">
          <button className="text-2xl">
            <FaGithub />
          </button>
          </a>
        </div>
      </div>
    </>
  );
}
