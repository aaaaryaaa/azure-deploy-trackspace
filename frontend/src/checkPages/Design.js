import React from "react";
import { useNavigate } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import Sidebar from "./Sidebar";

const Design = () => {
  const navigate = useNavigate();

  const handleWeekNavigation = (week) => {
    navigate(`/design/week${week}`);
  };

  return (
    <div className="flex flex-col bg-black">
    <div className="lg:block hidden ">
      <Sidebar domain="design" />
    </div>
    <div className="lg:hidden block relative top-20">
      <MobileSidebar domain="design" />
    </div>
      <div className="flex-1  p-4 mt-24">
        <h1 className="lg:text-6xl text-3xl font-bold text-center text-white lg:ml-52">
          Welcome to Design Domain
        </h1>
        {/* DaisyUI Timeline Component */}
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical flex-1 lg:ml-64 p-4 lg:mt-32">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Week 1</time>
              <div className="text-lg font-black">
                introduction to video editing and graphic design
              </div>
              Learning premiere pro and figma basics
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Week 2</time>
              <div className="text-lg font-black">
                Introduction to UI/UX design
              </div>
              Basics of Canva, Figma Advance Tutorial, and Illustrator
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Week 3</time>
              <div className="text-lg font-black">
                Introduction to Web Design
              </div>
              Integration with Web Development domain and basics of Web Design
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Week 4</time>
              <div className="text-lg font-black">Project Implementation</div>
              Final Project Review and Submission integrated with Web Development Domain
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Project Implementation</time>
              <div className="text-lg font-black">Project Implementation</div>
              Implement design projects and gather user feedback.
            </div>
          </li>
        </ul>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default Design;
