import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="flex justify-center mb-32 text-center">
      <div className=" flex-col">
        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          {"Let's build something together"}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">
          {
            "Feel free to reach out if you're looking for a developer, have a question, or just want to connect."
          }
        </p>
        <div className="flex items-center gap-4 justify-center">
          <div className="flex  gap-2">
            <MdOutlineMail size={20} className="mt-1" />
            <h1>pasteprosmana189@gmail.com</h1>
          </div>
          <span>|</span>
          <div className="flex items-center gap-2">
            <FaWhatsapp size={20} className="text-green-500" />
            <h1>089611241174</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
