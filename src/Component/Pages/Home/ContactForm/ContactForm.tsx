import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import contactbg from "../../../../assets/contactusbg.avif";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b2s0qhi",
        "template_cgffcdk",
        form.current as HTMLFormElement,
        "qcYwCAvNZ8731gFWA"
      )
      .then(
        (result) => {
          console.log(result);

          // Show success alert
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent.",
          });

          // Clear form fields
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          // Show error alert
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while sending the message.",
          });
        }
      );
  };

  return (
    <div
      className="bg-cover bg-no-repeat flex justify-center items-center min-h-screen"
      style={{ backgroundImage: `url(${contactbg})` }}
    >
      <div className="bg-gradient-to-r  p-10 from-green-300 via-blue-500 to-purple-600 rounded-lg shadow-lg w-full md:w-[500px] md:ml-auto md:mr-16">
        <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
              name="message"
              rows={4}
              placeholder="Your Message"
              required
            />
          </div>
          <button
            className="w-full btn btn-outline btn-primary hover:bg-white hover:text-blue-900 text-white py-2 px-4 rounded transition duration-300"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
