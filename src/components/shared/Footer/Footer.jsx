import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import InputField from "../InputField/InputField";

const Footer = () => {
  return (
    <section className="wrapper py-20 grid grid-cols-3">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-primary">
          <Link to={"/"}>Workforce Wiz</Link>
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi enim
          rerum ipsam quis, nostrum ratione fuga accusamus voluptatibus cum
          dolore temporibus esse ipsum id, a eius rem praesentium, error labore.
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
      <div className="space-y-3 lg: justify-self-center">
        <h2 className="text-lg font-bold">Social </h2>
        <ul className="flex items-center gap-4">
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
        <InputField type={"text"} placeholder={"Enter your email"} />
      </div>
    </section>
  );
};

export default Footer;
