import { Fragment } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentYear}{" "}
          <a target="_blank" href="https://www.instagram.com/healthy.tail?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:underline">
            HealthyTail
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/rotas/about" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="/rotas/services" className="hover:underline me-4 md:me-6">
              Services
            </a>
          </li>
          <li>
            <a href="/rotas/contactus" className="hover:underline me-4 md:me-6">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/rotas/calculator" className="hover:underline me-4 md:me-6">
              Calculator
            </a>
          </li>
          <li>
            <a href="/rotas/media" className="hover:underline me-4 md:me-6">
              Media
            </a>
          </li>
          <li>
            <a href="/rotas/bcs-system" className="hover:underline me-4 md:me-6">
              BCS-System
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Footer;
