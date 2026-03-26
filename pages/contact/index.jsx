import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, type: "", message: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        (result) => {
          setModal({
            show: true,
            type: "success",
            message: "Thank you. I will get back to you ASAP.",
          });
          event.target.reset();
        },
        (error) => {
          console.log("EmailJS error:", error);
          setModal({
            show: true,
            type: "error",
            message: `Failed to send message: ${error.text || "Unknown error"}. Please try again.`,
          });
        },
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full bg-primary/30 pt-16 lg:pt-0">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mt-5 lg:mt-0 mb-5 lg:mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            name="contact"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>

      {/* Modal */}
      {modal.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setModal({ show: false, type: "", message: "" })}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`bg-white p-8 rounded-lg shadow-xl max-w-md mx-4 text-center ${
              modal.type === "success"
                ? "border-l-4 border-green-500"
                : "border-l-4 border-red-500"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`text-4xl mb-4 ${modal.type === "success" ? "text-green-500" : "text-red-500"}`}
            >
              {modal.type === "success" ? "✓" : "✕"}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {modal.type === "success" ? "Message Sent!" : "Error"}
            </h3>
            <p className="text-gray-600 mb-6">{modal.message}</p>
            <button
              onClick={() => setModal({ show: false, type: "", message: "" })}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                modal.type === "success"
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
            >
              {modal.type === "success" ? "Great!" : "Try Again"}
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
