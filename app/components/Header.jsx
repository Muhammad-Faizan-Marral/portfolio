"use client";
import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50  flex items-center justify-between  px-6 py-4 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-3 ">
          <div className="h-8.5 w-8.5 rounded-lg shadow-blue-400 shadow-2xl bg-[linear-gradient(133deg,rgba(42,123,155,1)_0%,rgba(102,87,199,1)_50%,rgba(156,0,143,1)_100%)] flex items-center justify-center font-bold">
            F
          </div>
          <h1 className="font-medium text-xl leading-none tracking-wide text-white drop-shadow-[0_0_8px_rgba(0.8,0.8,0.8,0.8)]">
            Muhammad Faizan
          </h1>
        </div>

        <nav className="items-center justify-center gap-7 text-[#a1a1aa] text-[15px] hidden lg:flex ">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </nav>
        <div className="items-center justify-end hidden lg:flex ">
          <a
            className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            href="#contact"
          >
            <span>Hire Me</span>
            <span className="material-symbols-outlined text-[16px]">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </span>
          </a>
        </div>

        <div className="lg:hidden md:block ">
          {toggle ? (
            <div
              onClick={() => setToggle(!toggle)}
              className="opendMenu cursor-pointer"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 6H6m12 4H6m12 4H6m12 4H6"
                />
              </svg>
            </div>
          ) : (
            <div
              onClick={() => setToggle(!toggle)}
              className="closeMenu cursor-pointer"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </div>
          )}
        </div>
      </header>
      {toggle ? (
        <div></div>
      ) : (
        <div className="md:block lg:hidden  fixed top-16 left-0 w-full z-50   bg-black/10 backdrop-blur-xl border-b border-white/10">
          <nav className="flex items-center justify-center flex-col gap-7 text-[#a1a1aa] text-[15px]  bg-black/10 backdrop-blur-xl">
            <a href="#about" className="cursor-pointer hover:text-white">
              About
            </a>
            <a href="#skills" className="cursor-pointer hover:text-white">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-white">
              Projects
            </a>
            <a href="#experience" className="cursor-pointer hover:text-white">
              Experience
            </a>
            <div className="flex items-center justify-end ">
              <a
                className=" w-screen py-2.5  bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                href="#contact"
              >
                <span>Hire Me</span>
                <span className="material-symbols-outlined text-[16px]">
                  <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
