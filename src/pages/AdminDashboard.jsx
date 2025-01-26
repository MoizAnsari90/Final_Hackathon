import { useState } from "react";

const AdminDashboard = () => {
  const [loans, setLoans] = useState([]);

  const fetchLoans = async () => {
    try {
      // const response = await axios.get("http://localhost:5000/admin/loans");
      // setLoans(response.data);
      setLoans([
        { _id: "1", category: "Wedding", subcategory: "Valima", amount: 500000, status: "Pending" },
        { _id: "2", category: "Business", subcategory: "Shop Assets", amount: 1000000, status: "Approved" },
        { _id: "3", category: "Education", subcategory: "University Fees", amount: 200000, status: "Rejected" },
      ]);
    } catch (error) {
      alert("Failed to fetch loans");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="bg-purple-700 text-white w-64 p-6">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded-lg">
              <span>🏠</span>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded-lg">
              <span>📄</span>
              <span>Loan Applications</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded-lg">
              <span>📊</span>
              <span>Reports</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:bg-purple-600 p-2 rounded-lg">
              <span>⚙️</span>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>

     
      <div className="flex-1 p-8">
     
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span>👤 Admin</span>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Total Loans</h2>
            <p className="text-3xl">123</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Pending Loans</h2>
            <p className="text-3xl">45</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Approved Loans</h2>
            <p className="text-3xl">78</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Loan Applications</h2>
          <button
            onClick={fetchLoans}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 mb-4"
          >
            Fetch Loans
          </button>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Subcategory</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan) => (
                <tr key={loan._id} className="border-b">
                  <td className="p-3">{loan.category}</td>
                  <td className="p-3">{loan.subcategory}</td>
                  <td className="p-3">PKR {loan.amount}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        loan.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : loan.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {loan.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="text-purple-600 hover:text-purple-700">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;