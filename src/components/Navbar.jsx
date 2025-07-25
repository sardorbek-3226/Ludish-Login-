import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<div  className="p-4 bg-gray-100 fixed  top-0 left-0 right-0 z-50 shadow-md">
 <div className="container flex items-center justify-between gap-4">
 <div className="flex items-center gap-2">
  <img src="https://cdn-images.dzcdn.net/images/cover/0ea131dc82582e1044cefa46e840905f/1900x1900-000000-80-0-0.jpg" alt="" className="w-15 h-15 rounded-full"/>
  <h1 className="text-[30px] italic">Ludish</h1>
  </div>
    <nav className="flex gap-4 text-xl items-center">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/return">Ludish</Link>
      <button className=" border-1 px-6 py-1 bg-red-300 text-black hover:text-white transition-all ">Chiqish</button>

    </nav>
 </div>
</div>

  );
};

export default Navbar;
