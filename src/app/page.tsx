"use client";

import Head from 'next/head';
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion"

export default function Home() {
  const [requestText, setRequestText] = useState("");

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        "http://localhost:23000/automate/video",
        {
          prompt: requestText,
        }
      );
      console.log("Response from backend:", response.data);
      alert("Request sent successfully!");
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Failed to send request.");
    }
  };
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    /*<div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-900 text-white font-sans">
    
      <section className="relative h-screen flex items-center justify-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517292987307-cd27b662c75d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg animate-fade-in-down">
            Unleash Your YouTube Potential
          </h1>
          <p className="text-xl mb-10 opacity-90 animate-fade-in-up">
            Automate video creation, editing, and publishing with AI-powered
            precision. Focus on your content, let us handle the rest.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("automation-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-pink-400"
          >
            Get Started
          </button>
        </div>
      </section>

      <section className="py-20 bg-purple-900 bg-opacity-80 backdrop-filter backdrop-blur-lg p-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-12 drop-shadow-lg">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20 border border-white border-opacity-20">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                AI-Powered Scripting
              </h3>
              <p className="text-lg opacity-90 text-gray-800">
                Generate engaging video scripts tailored to your niche and
                audience, saving hours of writing time.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20 border border-white border-opacity-20">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Automated Voiceovers
              </h3>
              <p className="text-lg opacity-90 text-gray-800">
                Transform your scripts into natural-sounding voiceovers with a
                variety of customizable voices.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20 border border-white border-opacity-20">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Seamless Publishing
              </h3>
              <p className="text-lg opacity-90 text-gray-800">
                Directly upload your finished videos to YouTube, complete with
                optimized titles, descriptions, and tags.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="automation-section"
        className="py-20 bg-purple-800 bg-opacity-70 backdrop-filter backdrop-blur-lg p-4"
      >
        <div className="max-w-3xl mx-auto bg-white bg-opacity-10 rounded-xl shadow-2xl p-8 border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
          <h2 className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg text-gray-900">
            Test our Idea
          </h2>

          <div className="mb-6">
            <label
              htmlFor="request"
              className="block text-gray-800 text-lg font-semibold mb-2"
            >
              Enter your automation request:
            </label>
            <textarea
              id="request"
              className="w-full p-4 rounded-lg bg-white bg-opacity-15 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-300 resize-y min-h-[180px]"
              placeholder="e.g., 'Generate a script for a video about AI, then create a voiceover and upload it.'"
              value={requestText}
              onChange={(e) => setRequestText(e.target.value)}
            ></textarea>
          </div>

          <button
            onClick={sendRequest}
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75"
          >
            Send Request
          </button>
        </div>
      </section>

      
      <footer className="py-10 px-4 bg-purple-950 text-center text-gray-300 text-sm">
        <div className="max-w-6xl mx-auto">
          <p>
            &copy; {new Date().getFullYear()} YouTube Automation Platform. All
            rights reserved.
          </p>
          <p className="mt-2">
            Designed with passion by Auspicious for content creators.
          </p>
        </div>
      </footer>
    </div>*/

       <div className="min-h-screen bg-gradient-to-br from-[#6e00ff] to-[#120020] text-white font-satoshi">
      <Head>
        <title>Reelay — Automate Your YouTube Potential</title>
        <meta name="description" content="AI-powered YouTube video creation" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517292987307-cd27b662c75d?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950 to-transparent"></div>
        </div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Unleash Your YouTube Potential
          </h1>
          <p className="text-xl mb-10 opacity-90">
            Automate video creation, editing, and publishing with AI-powered
            precision. Focus on your content, let Reelay handle the rest.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("automation-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-xl transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-400"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1a0033] bg-opacity-90 backdrop-blur-lg p-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-extrabold mb-12 drop-shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            What We Do
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {["AI-Powered Scripting", "Automated Voiceovers", "Seamless Publishing"].map(
              (title, i) => (
                <motion.div
                  key={i}
                  className="bg-white bg-opacity-10 p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20 border border-white border-opacity-20"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: i * 0.2 },
                    },
                  }}
                >
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">{title}</h3>
                  <p className="text-lg opacity-90 text-gray-800">
                    {[
                      'Generate scripts tailored to your niche and audience.',
                      'Create voiceovers with natural, customizable voices.',
                      'Upload to YouTube with optimized metadata.',
                    ][i]}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Automation Request Section */}
      <section
        id="automation-section"
        className="py-20 bg-[#2a0044] bg-opacity-80 backdrop-blur-lg p-4"
      >
        <motion.div
          className="max-w-3xl mx-auto bg-white bg-opacity-10 rounded-xl shadow-2xl p-8 border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-extrabold text-center mb-8 drop-shadow-lg text-gray-900>
            Try Reelay in Action
          </h2>

          <div className="mb-6">
            <label
              htmlFor="request"
              className="block text-gray-800 text-lg font-semibold mb-2"
            >
              Enter your automation request:
            </label>
            <textarea
              id="request"
              className="w-full p-4 rounded-lg bg-white bg-opacity-15 text-gray-900 placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-300 resize-y min-h-[180px]"
              placeholder="e.g., 'Create a video about AI trends using Reelay.'"
              value={requestText}
              onChange={(e) => setRequestText(e.target.value)}
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={sendRequest}
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75"
          >
            Send Request
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-purple-950 text-center text-gray-400 text-sm">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p>&copy; {new Date().getFullYear()} Reelay. All rights reserved.</p>
          <p className="mt-2">
            Built with 💡 by Auspicious for creators & dreamers.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
