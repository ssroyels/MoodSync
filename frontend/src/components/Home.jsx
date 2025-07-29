import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`relative min-h-screen transition-all duration-500 overflow-hidden ${
        darkMode ? "bg-[#0a0a0a] text-white" : "bg-[#f1f1f1] text-gray-900"
      }`}
      style={{
        backgroundPosition: `${mousePos.x / 60}px ${mousePos.y / 60}px`,
      }}
    >
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-white/10 dark:bg-white/5 shadow-lg border-b border-white/10 flex justify-between items-center">
        <div className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent select-none">
          MoodSync
        </div>

        <nav className="hidden md:flex gap-8 text-base font-semibold items-center">
          <Link to="/" className="hover:text-pink-400 transition-all">
            Home
          </Link>
          <Link to="/login" className="hover:text-pink-400 transition-all">
            Login
          </Link>
          <Link to="/signup" className="hover:text-pink-400 transition-all">
            Signup
          </Link>
          <Link to="/about" className="hover:text-pink-400 transition-all">
            About
          </Link>
        </nav>

        <button
          onClick={toggleDarkMode}
          className="text-xl p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md transition-all"
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </header>

      {/* Floating Emoji Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.15,
              y: [0, -60, 0],
              x: [0, 20, -20, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
            className="absolute text-3xl select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {["😊", "😢", "😠", "😎", "🤯", "😴", "😂", "😍"][i % 8]}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center h-[100vh] px-6 pt-24 gap-10">
        <motion.div
          className="text-center md:text-left max-w-xl space-y-6 bg-white/10 dark:bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
            MoodSync: Feel the Future
          </h1>
          <p className="text-lg tracking-wide leading-relaxed">
            AI-Powered Emotion Detection and Syncing for a Brighter Digital Mood.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full shadow-xl font-medium transition-all"
            >
              Get Started
            </button>
          </div>
        </motion.div>

        <motion.img
          src="https://i.pinimg.com/originals/05/ec/48/05ec4876e7d36fe31716557ddc2bd7ee.gif"
          alt="Mood Illustration"
          className="max-w-sm w-full rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>
    </div>
  );
};

export default Home;


