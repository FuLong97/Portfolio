import { useState } from "react";
const UserCard = ({ name, role, email, imageUrl, status, bio }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initial = name ? name.charAt(0).toUpperCase() : "?";
  return (
    <div className="max-w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="flex flex-row">
        <div className="md:shrink-0 relative">
          <span
            className={`absolute w-3 h-3 top-3 right-3 rounded-full border-2 border-white dark:border-gray-900 ${status === "online" ? "bg-emerald-400" : "bg-gray-400"}`}
          ></span>

          {imageUrl ? (
            <img
              className="aspect-video object-cover md:h-full md:w-48"
              src={imageUrl}
              alt={name}
            />
          ) : (
            <div className="h-48 w-full md:h-full md:w-48 bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 text-4xl font-bold">
              {initial}
            </div>
          )}
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-violet-600 dark:text-violet-400 font-semibold">
            {role}
          </div>

          <h2 className="block mt-1 text-lg leading-tight font-medium text-gray-900 dark:text-gray-100">
            {name}
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">{email}</p>
          <div
            className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <p className="mt-2 text-gray-600 dark:text-gray-300">{bio}</p>
          </div>
          <button className="mt-4 px-4 py-1 text-sm text-violet-600 dark:text-violet-400 font-semibold rounded-full border border-violet-200 dark:border-violet-800 hover:text-white hover:bg-violet-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-colors">
            Message
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 ml-2 px-4 py-1 text-sm text-gray-600 dark:text-gray-400 font-semibold rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isExpanded ? "Hide Bio" : "View Bio"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
