import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUser from "../../hooks/useUser";
import Loader from "../../components/shared/Loader/Loader";
import { useState } from "react";

const Contact = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data } = useUser();
  const [contacts, setContacts] = useState([]);

  const {
    data: temp,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["contacts"],
    enabled: data?.role === "Admin" ? true : false,
    queryFn: async () => {
      const { data } = await axiosSecure("/contacts");
      setContacts(data);
      return data;
    },
  });

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

  if (isLoading) return <Loader />;

  if (isError) return <p>{error.message}</p>;

  console.log(contacts);

  return (
    <>
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

      <div className="wrapper grid  grid-cols-1 lg:grid-cols-2 my-12 gap-4">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="p-6 bg-white rounded-lg flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-cocoBlack">
                {contact.name}
              </h2>
              <p className="text-base text-iron font-semibold">
                ({contact.email})
              </p>
            </div>
            <p>{contact.message}</p>
          </div>
        ))}

        {/* <div className="p-6 bg-white rounded-lg flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-cocoBlack">
              Adnan Bin Akhlas
            </h2>
            <p className="text-base text-iron font-semibold">
              (adnanakhlas39@gmail.com)
            </p>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad itaque
            ipsa sit nam. Eius, dicta officiis rerum eligendi nostrum
            consequuntur maiores, aliquam, eos perspiciatis ut iste fuga quasi
            labore repellendus.
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
