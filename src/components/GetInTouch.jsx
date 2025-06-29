import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Swal from "sweetalert2";
import { FaLocationDot } from "react-icons/fa6";

const GetInTouch = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    form.current.time.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_t4mbjmf", // Your actual Service ID
        "template_hywgn1h", // Your actual Template ID
        form.current,
        "BsP9HGUHn-G5oMRXn" // Your actual Public Key
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Sent!",
            text: "Your message has been sent successfully.",
            showConfirmButton: false,
            timer: 2000
          });
          form.current.reset();
        },
        () => {
          Swal.fire("Oops!", "Something went wrong. Try again.", "error");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-[#312f2f] text-white">
      <div className="container mx-auto px-4 md:px-0">
        {/* Section Title */}
        <div className="flex justify-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wider relative inline-block">
            <span className="relative z-10 text-white drop-shadow-[2px_2px_0px_#ff0054]">
              GET IN TOUCH
            </span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="p-6 gap-6 flex flex-col" data-aos="fade-left">

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-primary mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+8801318181198" className="text-[#ff0054] hover:underline">
                  +880 1318 181198
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaWhatsapp className="text-primary mt-1" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <a
                  href="https://wa.me/8801318181198"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#ff0054] hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-primary mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:info.yeasinislam@gmail.com"
                  className="text-[#ff0054] hover:underline"
                >
                  info.yeasinislam@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <FaLocationDot className="text-primary mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p
                  className="text-[#ff0054]"
                >
                  Uttara, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 p-6 grid lg:grid-cols-2 gap-4"
            data-aos="fade-right"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              className="input input-bordered bg-white w-full text-black"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered bg-white w-full text-black"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your e-mail"
              className="lg:col-span-2 input bg-white input-bordered w-full text-black"
              required
            />
            <textarea
              name="message"
              placeholder="Type your message here"
              className="lg:col-span-2 bg-white textarea textarea-bordered w-full h-32 text-black"
              required
            ></textarea>

            {/* Hidden time field */}
            <input type="hidden" name="time" ref={(el) => form.current && (form.current.time = el)} />

            <button type="submit" className=" lg:col-span-2 btn btn-primary w-full font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
