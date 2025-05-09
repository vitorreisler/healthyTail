import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaPaw } from "react-icons/fa";


const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    if (window.screen.width < 500) {
      setIsSmallScreen(true);
    }
  }, []);

  const rota = "/rotas";
  const rotas = [
    {
      nome: "Home",
      rota: "/",
    },
    {
      nome: "About",
      rota: `${rota}/about`,
    },
    {
      nome: "Services",
      rota: `${rota}/services`,
    },
    {
      nome: "Contact Us",
      rota: `${rota}/contactus`,
    },
    {
      nome: "Media",
      rota: `${rota}/media`,
    },
  ];
  return (
    <nav className="bg-white border-gray-200  dark:bg-gray-700">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto ">
        {isSmallScreen ? (
          <span className="flex gap-1 py-3">Healthy <FaPaw />Tail</span>
        ) : (
          <Link
            href="/"
            className="flex items-center rounded-3xl overflow-hidden  "
          >
            <Image
              src="/images/logo.jpg"
              width={80}
              height={80}
              alt="healthyTail logo"
            />
          </Link>
        )}

        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="true"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {rotas.map((rota) => (
              <li key={rota.nome}>
                <Link
                  href={rota.rota}
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {rota.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
