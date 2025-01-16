import { FaUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/shared/Loader/Loader";
import useUser from "../../hooks/useUser";
import { GoUnverified, GoVerified } from "react-icons/go";
const Profile = () => {
  const { user, loading } = useAuth();
  const { data: employeeInfo, isLoading, isError, error } = useUser();

  if (loading || isLoading) return <Loader />;

  if (isError) return <p>{error}</p>;

  console.log(employeeInfo);

  const { role, bankAccount, email, verified, imageURL, name, designation } =
    employeeInfo;

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
            {name}
          </p>
          <p className="mt-2 text-sm font-semibold text-cocoBlack flex items-center gap-1">
            {role}{" "}
            <span>
              {verified ? (
                <GoVerified className="text-green-500" size={24} />
              ) : (
                <GoUnverified className="text-red-500" size={24} />
              )}
            </span>
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-sm text-gray-600 ">
              <p className="flex flex-col">
                Designation
                <span className="font-medium text-cocoBlack ">
                  {designation || "Human Resource Manager"}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-medium text-cocoBlack ">{email}</span>
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
