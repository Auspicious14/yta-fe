"use client";

import { useState } from "react";
import axios from "axios";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-900 text-white font-sans">
      {/* Hero Section */}
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

      {/* Features Section */}
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

      {/* Automation Request Section */}
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

      {/* Footer */}
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
    </div>
  );
}
