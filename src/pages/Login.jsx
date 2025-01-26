import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../api"; 

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await postRequest("/api/users/login", data);
      localStorage.setItem("token", response.token); 
      alert("Login successful");
      navigate("/admin"); 
    } catch (error) {
      alert("Login failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-80 space-y-4">
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <button
          type="submit"
          className="w-full px-4 py-2 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;