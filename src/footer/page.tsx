import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterPage = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex-col text-md md:text-xl">
        <h1>© 2025 Designed and coded with ❤️ by Paste Prosmana</h1>
        <div className="flex justify-center gap-6 my-6">
          <span>
            <FaGithub size={32} />
          </span>
          <span>
            <FaLinkedin size={32} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
