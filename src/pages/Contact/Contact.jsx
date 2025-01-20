import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Contact = () => {
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const messageInfo = { name, email, message };

    try {
      await axiosPublic.post(`/contacts`, messageInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" my-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Get in Touch with Us
      </h2>
      <div className=" wrapper grid grid-cols-1 md:grid-cols-2 gap-12">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full bg-white p-6 rounded-lg"
        >
          <div className="flex flex-col gap-1">
            <label className="capitalize font-semibold " htmlFor="name">
              name:
            </label>
            <input
              required
              className="input-field w-full "
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="capitalize font-semibold " htmlFor="email">
              email:
            </label>
            <input
              required
              className="input-field w-full "
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="capitalize font-semibold " htmlFor="message">
              Message:
            </label>
            <textarea
              className="input-field w-full  resize-none"
              name="message"
              id="message"
              cols="30"
              rows="7"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button className="btn w-full">Send Message</button>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-md items-center flex flex-col justify-center text-center">
            <FaPhoneAlt className="text-blue-600 my-4" size={24} />
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Phone Number</h3>
              <p>+880 1672 478515</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md items-center flex flex-col justify-center text-center">
            <FaEnvelope className="text-blue-600 my-4" size={24} />
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Email</h3>
              <p>support@eatopia.com</p>
              <p>info@eatopia.com</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md items-center flex flex-col justify-center text-center">
            <FaMapMarkerAlt className="text-blue-600 my-4" size={24} />
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Location</h3>
              <p>House 2/A, Road 4/B, Sector 15/C, Dhaka 1230</p>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md items-center flex flex-col justify-center text-center">
            <FaClock className="text-blue-600 my-4" size={24} />
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Working Hours</h3>
              <p>Monday to Saturday</p>
              <p> 09:00 AM to 06:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
