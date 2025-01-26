import { useForm } from "react-hook-form";
import { postRequest } from "../api/index.js";
import { useNavigate } from "react-router-dom";

const LoanRequest = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId"); // Assuming userId is stored in localStorage after login

      // Prepare the loan request data
      const loanData = {
        userId,
        category: data.category,
        subcategory: data.subcategory,
        amount: data.amount,
        duration: data.duration,
        guarantorId: data.guarantorId || null, // Optional field
      };

      // Submit the loan request
      const response = await postRequest("/api/loans/submit", loanData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Loan request submitted successfully");
      navigate("/"); // Redirect to loans page after submission
    } catch (error) {
      alert("Loan submission failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6">
      <h1 className="text-3xl font-bold mb-8">Loan Request</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <input
            type="text"
            placeholder="Category"
            {...register("category", { required: "Category is required" })}
            className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
          />
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Subcategory</label>
          <input
            type="text"
            placeholder="Subcategory"
            {...register("subcategory", { required: "Subcategory is required" })}
            className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
          />
          {errors.subcategory && <p className="text-red-500 text-sm mt-1">{errors.subcategory.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            placeholder="Amount"
            {...register("amount", { required: "Amount is required", min: 0 })}
            className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
          />
          {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Duration (Months)</label>
          <input
            type="number"
            placeholder="Duration"
            {...register("duration", { required: "Duration is required", min: 1 })}
            className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
          />
          {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Guarantor ID (Optional)</label>
          <input
            type="text"
            placeholder="Guarantor ID"
            {...register("guarantorId")}
            className="w-full px-4 py-2 border-2 border-white rounded-lg bg-transparent text-white placeholder-gray-300 focus:outline-none focus:border-purple-300"
          />
        </div>

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