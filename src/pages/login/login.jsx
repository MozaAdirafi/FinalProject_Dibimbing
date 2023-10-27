import axios from "axios";
import airplane_login from "../../assets/images/airplane_login.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const textShadowStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  };
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login",
        formData,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      );
      console.log(formData);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.data.role); 
        localStorage.setItem("name", response.data.data.name); 
        navigate("/")
      } else {
        setErrorMessage("Registration Failed");
      }
    } catch (error) {
      setErrorMessage("Registration Failed");
    }
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[25%] left-[10%] flex flex-col">
          <h1 className="text-6xl text-white font-bold my-4 " style={textShadowStyle}>
            Turn Your Travel Dreams into Reality
          </h1>
          <p className="text-2xl text-white font-semibold" style={textShadowStyle}>
            Start Your Journey for Free and Discover Attractive Offers from Our
            Community
          </p>
        </div>

        <img src={airplane_login} className="w-full h-full object-cover" />
      </div>

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify between">
        <h1 className="text-4xl text-black font-extrabold ">Mooking</h1>

        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col mb-10">
            <h3 className="text-2xl my-6 font-semibold mb-4">Login</h3>
            <p className="text-sm mb-2">
              Welcome back! please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me for 30 days</p>
              {errorMessage && (
                <div className="w-full text-red-500 text-right my-4">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>

          <div className="w-full flex flex-col my-4">


            <button
              className="w-full text-white my-2 font-semibold bg-[#0071c2] rounded-md p-4 text-center flex items-center justify-center"
              onClick={handleRegister}
            >
              Login
            </button>
          </div>

          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-[#0071c2]">
              Dont have an account?{" "}
              <a href="/register">
              <span className="font-semibold underline underline-offset-2 cursor-pointer">
                Register here
              </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
