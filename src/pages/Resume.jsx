import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Resume = () => {
  return (
    <div className="min-h-screen bg-primary p-6 sm:p-12">
      <motion.div variants={textVariant()}>
        <h1 className="text-white text-3xl font-bold mb-4">My Resume</h1>
        <p className="text-secondary mb-6">View or download my resume below.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <iframe
          src="/SomilKumar_Resume.pdf"
          title="Somil's Resume"
          className="w-full h-[90vh] border-2 border-secondary rounded-xl"
        />
        <div className="mt-4 text-center">
          <a
            href="/SomilKumar_Resume.pdf"
            download
            className="text-white bg-tertiary px-5 py-2 rounded-lg shadow-md hover:bg-secondary transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
