import { useState } from "react";
import useFetch from "../hook/useFetch/useFetch.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaSearch,
  FaDownload,
  FaRegHeart,
  FaRegImage,
  FaTimes,
} from "react-icons/fa";

const ACCESS_KEY = "IFkqzU1i2DFtVGq0lttC9unfqD0OL_eF8Z1LOsJ6nhU";

const Return = () => {
  const [searchParams, setSearchParams] = useState("");
  const [url, setUrl] = useState("");
  const [modalImage, setModalImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchParams.trim()) {
      toast.error("Please enter a search term!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setUrl(
      `https://api.unsplash.com/search/photos?query=${searchParams}&per_page=28&client_id=${ACCESS_KEY}`
    );
  };

  const { data, isPending, error } = useFetch(url);

  return (
    <div className="mt-16 mb-10 px-4 py-10 bg-gradient-to-b from-white to-blue-50 min-h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <div className="relative w-full sm:w-[500px]">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for photos..."
            className="pl-9 pr-4 py-2 text-lg w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchParams(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-black/80 transition-all duration-300 hover:bg-black/40 text-white px-6 py-2 rounded-lg shadow font-medium"
        >
          Search
        </button>
      </form>

      <ToastContainer />

      {isPending && (
        <p className="text-center text-blue-500 text-lg animate-pulse">
          Loading images...
        </p>
      )}

      {error && (
        <p className="text-center text-red-500 text-lg">Malumot qidiring!</p>
      )}

      {data?.results?.length === 0 && !isPending && (
        <p className="text-center text-gray-500 text-lg">
          Hech qanday rasm topilmadi.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.results?.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-lg shadow hover:shadow-xl transition"
          >
            <div className="relative">
              <img
                src={image.urls.small}
                alt={image.alt_description}
                onClick={() => setModalImage(image)}
                className="h-[230px] w-full object-cover cursor-pointer hover:opacity-90 transition"
              />
              <button className="absolute top-2 right-2">
                <FaRegHeart className="text-red-500 text-lg" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
                {image.alt_description || "Untitled"}
              </h3>
              <p className="text-md text-gray-700 font-bold italic mb-2">
                {image.user.name}
              </p>
              <a
                href={image.links.download}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-black/40 hover:text-black/90 transition-all hover:underline"
              >
                <FaDownload /> Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="relative max-w-3xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setModalImage(null)}
            >
              <FaTimes />
            </button>
            <img
              src={modalImage.urls.regular}
              alt={modalImage.alt_description}
              className="rounded-lg shadow-lg w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Return;
