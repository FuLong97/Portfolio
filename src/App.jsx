import UserCard from "./components/UserCard.jsx";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { useState } from "react";
import Hero from "./components/Hero.jsx";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const heroRoles = [
    "Frontend Engineer",
    "Three.js Developer",
    "Creative Coder",
    "WebGL Enthusiast",
  ];
  const myName = "FuLong";
  const users = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Frontend Engineer",
      email: "alex@dev.com",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
      status: "offline",
      bio: "Passionate about building accessible UIs with React and Tailwind. Loves hiking on weekends",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Product Designer",
      email: "sarah@design.com",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      status: "online",
      bio: "Passionate about building accessible UIs with React and Tailwind. Loves hiking on weekends",
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
        <Hero roles={heroRoles} name={myName}></Hero>
      </div>
    </div>
  );
}

export default App;
