import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({ cnic: "", email: "", name: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("http://localhost:5000/register", formData);
      alert("Registration successful");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <h1 className="text-3xl font-bold mb-8">Register</h1>
      <form onSubmit={handleSubmit} className="w-80 space-y-4">
        <input
          type="text"
          placeholder="CNIC"
          value={formData.cnic}
          onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
          className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
        />
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;