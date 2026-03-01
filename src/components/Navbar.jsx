const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 shadow-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-violet-600 text-white p-2 rounded-lg font-bold">
            Dev
          </div>
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
            FuLong
          </span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:ring-2 ring-violet-500 transition-all"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a
            href="#"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Directory
          </a>
          <a
            href="#"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Settings
          </a>
          <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-all">
            Log Out
          </button>
        </div>

        <div className="md:hidden text-2xl cursor-pointer text-gray-700 dark:text-gray-300">
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
