import React from "react";
import backgroundImage from "../assets/images/skewedRectangleBack.svg";

const ContactForm = () => {
  return (
    <div
      className="min-h-[50rem] flex items-center justify-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "120vw 80%,cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-6 sm:p-8 md:p-10  backdrop-blur-[1.8rem] rounded-lg shadow-lg max-w-md w-[85%] border-4 border-solid border-[rgb(180,180,180)">
        <h2 className="text-blue-400 text-3xl sm:text-4xl mb-4 font-medium text-center">
          LET’S CHAT ABOUT YOUR CAREER
        </h2>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-lg mb-1 text-black"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your first name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-lg mb-1 text-black">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Your last name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg mb-1 text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg mb-1 text-black">
              Write your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="2"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 resize-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-indigo-500 border shadow-xl border-transparent rounded-md py-2 px-4 text-sm font-medium hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
