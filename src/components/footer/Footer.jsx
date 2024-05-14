import React from "react";
import { Container } from "../index";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="relative shrink-0 bg-teal-950 pt-8 pb-6">
      <Container>
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-white-900">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-white-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="flex mt-6 lg:mb-0 mb-6 *:flex *:items-center *:justify-center *:bg-white *:text-green-950 space-x-2">
              <button
                className="shadow-lg font-normal h-10 w-10 align-center rounded-full outline-none focus:outline-none group"
                type="button"
              >
                <FaFacebookF className="w-5 h-5 group-hover:text-green-700 duration-300" />
              </button>
              <button
                className="shadow-lg font-normal h-10 w-10 align-center rounded-full outline-none focus:outline-none group"
                type="button"
              >
                <FaInstagram className="w-5 h-5 group-hover:text-green-700 duration-300" />
              </button>
              <button
                className="shadow-lg font-normal h-10 w-10 align-center rounded-full outline-none focus:outline-none group"
                type="button"
              >
                <FaYoutube className="w-5 h-5 group-hover:text-green-700 duration-300" />
              </button>
              <button
                className="shadow-lg font-normal h-10 w-10 align-center rounded-full outline-none focus:outline-none group"
                type="button"
              >
                <FaDiscord className="w-5 h-5 group-hover:text-green-700 duration-300" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-5/12 px-4 ml-auto">
                <span className="block uppercase text-white-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white-600 hover:text-white-800 font-semibold block pb-2 text-sm hover:pl-2 duration-300"
                      href="https://www.creative-tim.com/presentation?ref=njs-profile"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-600 hover:text-white-800 font-semibold block pb-2 text-sm hover:pl-2 duration-300"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-600 hover:text-white-800 font-semibold block pb-2 text-sm hover:pl-2 duration-300"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-600 hover:text-white-800 font-semibold block pb-2 text-sm hover:pl-2 duration-300"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-5/12 px-4">
                <span className="block uppercase text-white-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-white-600 hover:text-white-800 font-semibold block pb-2 text-sm hover:pl-2 duration-300"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-600 hover:text-white-800 font-semibold block pb-2 text-sm hover:pl-2 duration-300"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-600 hover:text-white-800 font-semibold block pb-2 text-sm hover:pl-2 duration-300"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white-600 hover:text-white-800 font-semibold block pb-2 text-sm hover:pl-2 duration-300"
                      href="https://creative-tim.com/contact-us?ref=njs-profile"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <hr className="my-6 border-white-300" />

      <Container>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>{" "}
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-white-500 hover:text-gray-800"
                target="_blank"
              >
                Chai aur React
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
