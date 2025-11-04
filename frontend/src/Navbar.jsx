import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full flex justify-between items-center py-4 px-10 border-b border-gray-700 bg-[#0B182B]/90 backdrop-blur">
      <div className="text-2xl font-bold">LOGO</div>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-cyan-400">ABOUT US</Link>
        <Link to="/our-services" className="hover:text-cyan-400">OUR SERVICES</Link>
        <Link to="/work" className="hover:text-cyan-400">WORK WITH US</Link>
        <Link to="/blog" className="hover:text-cyan-400">BLOG</Link>
        <Link to="/contact" className="hover:text-cyan-400">GET IN TOUCH</Link>
      </nav>
    </header>
  );
}
