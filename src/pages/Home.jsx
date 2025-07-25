import { Link } from "react-router-dom";
import { FaSearch , FaRocket, FaCode } from "react-icons/fa";
import { SiUnsplash } from "react-icons/si";

const Home = () => {
  return (
    <div className="mt-15 mb-5 flex items-center justify-center px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-5xl font-extrabold text-black/60 mb-4 flex justify-center items-center gap-2">
          <SiUnsplash className="text-5xl" /> ImageFinder
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Discover and download millions of beautiful, high-quality photos for free. Powered by{" "}
          <span className="font-semibold text-gray-800">Unsplash API</span>, ImageFinder helps
          you find the perfect image for your project — fast and free.
        </p>

        <Link
          to="/return"
          className="inline-flex items-center gap-2 bg-black/80 hover:bg-black/40 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200"
        >
          <FaSearch />
          Start Searching
        </Link>

        <div className="mt-10 bg-gray-100 p-10 rounded-lg shadow-sm text-left">
          <ul className="list-disc pl-6 space-y-5 text-gray-700 ">
            <li className="flex items-center gap-2">
              <FaSearch className="text-blue-500" /> Search any topic in real-time with Unsplash API
            </li>
            <li className="flex items-center gap-2">
              <FaRocket className="text-purple-500" /> Access over 3 million+ high-quality photos
            </li>
            <li className="flex items-center gap-2">
              <FaCode className="text-orange-500" /> Built with React, Tailwind CSS and custom hooks
            </li>
          </ul>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          <p>
            Created by <strong>Sardor Ibrogimov</strong> • Open source project using{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Unsplash API
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
