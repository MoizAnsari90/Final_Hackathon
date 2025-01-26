import { useState } from "react";

const LoanRequest = () => {
  const [formData, setFormData] = useState({ category: "", subcategory: "", amount: 0, guarantors: [] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const token = localStorage.getItem("token");
      // await axios.post("http://localhost:5000/loan", formData, { headers: { Authorization: `Bearer ${token}` } });
      alert("Loan request submitted successfully");
    } catch (error) {
      alert("Loan submission failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <h1 className="text-3xl font-bold mb-8">Loan Request</h1>
      <form onSubmit={handleSubmit} className="w-80 space-y-4">
        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
        />
        <input
          type="text"
          placeholder="Subcategory"
          value={formData.subcategory}
          onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
          className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
        />
        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
        >
          Submit Loan Request
        </button>
      </form>
    </div>
  );
};

export default LoanRequest;