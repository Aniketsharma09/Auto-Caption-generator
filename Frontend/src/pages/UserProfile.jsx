import { toast } from "react-toastify";
import API from "../utils/axiosConfig";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await API.get("auth/user");
        toast.success(response.data.message);
        setUserName(response.data.user);
      } catch (err) {
        toast.error(err.response.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    };
    getUserData();
  }, [navigate]);

  const logoutHandler = async() =>{
try {
  const responce = await API.get('auth/logout');
  toast.success(responce.data.message);
  setTimeout(()=>{
    navigate('/login');
  },1500)
} catch (err) {
  toast.error(err.responce.data.message);
}
  }

  return (
    <>
      {userName ? (
        <div className="userProfile w-full h-[90vh] flex items-center justify-center">
          <div className="profileCart bg-gray-900 rounded-xl w-[40rem] max-w-[50rem] h-[50vh] flex items-center justify-between ">
            <div className="left w-[40%] p-3 h-full  flex flex-col items-center gap-6">
              <div className="w-[75%] overflow-hidden h-[48%]  rounded-full ">
                <img
                  src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="userProfile"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <button onClick={logoutHandler}
                className="px-5 py-2 bg-blue-400 rounded-md text-md tracking-widest hover:scale-[.98] active:scale-[.95] "
                type="button"
              >
                Logout
              </button>
            </div>
            <div className="right w-[55%] h-full  p-5 ">
              <h1 className="text-2xl capitalize text-center">{userName}</h1>
            </div>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </>
  );
};

export default UserProfile;
