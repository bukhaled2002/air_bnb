import { GiHamburgerMenu } from "react-icons/gi";

import { IoPersonCircleSharp } from "react-icons/io5";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="navbar bg-base-100 mx-auto flex items-center h-20 px-10 md:px-20">
        <div className="navbar-start">
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} className="w-24 md:w-26" />
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 navbar">
            <li>
              <NavLink to={"/"} key={1}>
                Stays
              </NavLink>
            </li>
            <li>
              <NavLink to={"/experiences"} key={2}>
                Experiences
              </NavLink>
            </li>
            <li>
              <NavLink to={"/online-experiences"} key={3}>
                Onilne Experiences
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <div>
            <button
              className="btn btn-ghost text-xl"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <span>Filter</span>
              <GiHamburgerMenu />
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle p-0 "
            >
              <IoPersonCircleSharp className="text-5xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
