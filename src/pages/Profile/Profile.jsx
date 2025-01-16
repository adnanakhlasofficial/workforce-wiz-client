import { FaUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/shared/Loader/Loader";
const Profile = () => {
  const { user, loading } = useAuth();

  if (loading) return <Loader />;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        <div className="flex flex-col items-center justify-center p-4 ">
          <img
            alt="profile"
            src={user && user?.email ? user?.photoURL : <FaUserCircle />}
            className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
          />

          <p className="py-1 px-6 text- text-white bg-midnightOcean rounded-md mt-2">
            {user.displayName}
          </p>
          <p className="mt-2 text-sm font-semibold text-cocoBlack ">
            {"Admin"}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-sm text-gray-600 ">
              <p className="flex flex-col">
                Designation
                <span className="font-medium text-cocoBlack ">
                  {"Social Media executive"}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-medium text-cocoBlack ">
                  {user.email}
                </span>
              </p>
            </div>

            <div className="flex gap-2 justify-center mt-4">
              <button className="btn !text-sm">Update Profile</button>
              <button className="btn !text-sm">Change Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
