import React, { useState } from "react";

const Header = () => {
  const [fileName, setFileName] = useState("untitled");
  return (
    <header className="sticky">
      <nav className="px-6 py-4 flex justify-between">
        <div className="flex gap-2">
          <svg
            className="TitleLogo_logo__7cnAS w-[30px]"
            viewBox="0 0 1699 660"
          >
            <path
              fill="#EC2C40"
              d="M804.7,660.3H50c-38.8,0-62.8-55-42.7-98.2L253,31.4C262,11.9,278.2,0,295.7,0h509V660.3z"
            ></path>
            <path
              fill="#00A9E5"
              d="M891.3,0L1646,0c38.8,0,62.8,55,42.7,98.2L1443,628.9c-9,19.5-25.2,31.4-42.7,31.4h-509V0z"
            ></path>
          </svg>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="Enter File Name"
            className="outline-none bg-[rgba(0,0,0,0)] border border-transparent focus:focus:border-[rgba(255,255,255,0.08)] w-auto font-thin text-md"
          />
        </div>

        {/* <ul className="flex gap-6 text-xl text-gray-600">
          <li className="cursor-pointer hover:text-white">
            <i className="ri-home-line "></i>
          </li>
          <li className="cursor-pointer hover:text-white">
            <i className="ri-user-line"></i>
          </li>
          <li className="cursor-pointer hover:text-white">
            <i className="ri-question-line"></i>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
