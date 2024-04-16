import { useState } from "react";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";

export function Nav({ onClickShoppingBtn }) {
  const [isMobileShown, setIsMobileShown] = useState(false);
  const ROUTERS = ["Home", "About", "Services", "Pricing", "Contact"];
  return (
    <nav className="relative z-10 flex flex-wrap justify-between items-center">
      {/* logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>
      {/* Burger button */}
      <button
        onClick={() => setIsMobileShown(!isMobileShown)}
        className="hover:bg-gray-100 rounded-lg p-2 focus:ring-2 focus:ring-gray-200 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700"
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu List */}
      <div
        className={`${isMobileShown === false && "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row lg:border-none lg:bg-transparent bg-gray-50 text-lg border border-gray-100 p-4 rounded-lg lg:dark:text-white">
          {ROUTERS.map((route, i) => {
            return (
              <li
                className={`lg:hover:text-blue-500 lg:hover:bg-transparent rounded px-3 py-2 cursor-pointer ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"} ${(i == 3 || i == 4) && "lg:text-white"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Cart button */}
      <div
        onClick={onClickShoppingBtn}
        className="btn-press-anim fixed left-4 bottom-4 lg:static lg:mr-8"
      >
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full shadow-md bg-white">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
