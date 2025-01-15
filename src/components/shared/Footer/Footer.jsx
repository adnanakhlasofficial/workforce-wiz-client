import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="wrapper py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-primary">
          <Link to={"/"}>Workforce Wiz</Link>
        </h2>
        <p>
          Our commitment to empowering your workforce with innovative employee
          management solutions ensures a supportive and productive work
          environment. Join us in fostering excellence and growth.
        </p>
      </div>
      <div className="space-y-3 lg:justify-self-center">
        <h2 className="text-lg font-bold">Company</h2>
        <ul className="space-y-2">
          <Link
            className="block hover:text-primary transition-colors font-medium"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="block hover:text-primary transition-colors font-medium"
            to={"/"}
          >
            About Us
          </Link>
          <Link
            className="block hover:text-primary transition-colors font-medium"
            to={"/"}
          >
            Contact Us
          </Link>
        </ul>
      </div>
      <div className="space-y-3 lg: justify-self-center w-full">
        <h2 className="text-lg font-bold">Social </h2>
        <ul className="flex items-center gap-4 !mb-6">
          <Link to={"/"}>
            <FaFacebook className="hover:text-primary transition" size={24} />
          </Link>
          <Link to={"/"}>
            <FaXTwitter className="hover:text-primary transition" size={24} />
          </Link>
          <Link to={"/"}>
            <FaLinkedinIn className="hover:text-primary transition" size={24} />
          </Link>
        </ul>
        <input
          className="w-3/4 bg-inherit bg-white py-2 block px-4 rounded-md text-sm"
          type="text"
          placeholder="Your Email"
        />
        <button className="btn !rounded-md">Subscribe</button>
      </div>
    </section>
  );
};

export default Footer;
