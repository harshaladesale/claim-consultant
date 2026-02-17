import { useEffect, useState, useMemo } from "react";
import { fetchAllQuery } from "../api/Query";

const AdminAllQuery = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await fetchAllQuery();
        setUsers(res);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users;
    const term = searchTerm.toLowerCase();

    return users.filter((user) =>
      user._id?.toLowerCase().includes(term)
    );
  }, [searchTerm, users]);

  if (loading) {
    return (
      <div className="pl-80 mt-10 text-indigo-500 text-xl font-semibold">
        Loading Users...
      </div>
    );
  }

  return (
    <div className="pl-10 pr-10 mt-8 min-h-screen p-6 rounded-xl">
      <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-indigo-700">
            All Contacts
          </h2>
        </div>
       
      </div>
      <div className="rounded-2xl shadow-lg overflow-hidden border border-indigo-200 bg-indigo-50">

        <table className="min-w-full text-lg">

          <thead className="bg-linear-to-r from-indigo-300 to-purple-300 text-indigo-900">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">Name</th>
              <th className="px-6 py-4 text-left font-semibold">Email</th>
              <th className="px-6 py-4 text-left font-semibold">Claim Type</th>
              <th className="px-6 py-4 text-left font-semibold">Message</th>
              <th className="px-6 py-4 text-left font-semibold">Created</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-indigo-200">
            {filteredUsers.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-10 text-center text-purple-600 text-xl font-medium"
                >
                  No Users Found
                </td>
              </tr>
            ) : (
              filteredUsers.map((user, index) => (
                <tr
                  key={user._id}
                  className={`transition duration-200 hover:bg-purple-100 ${
                    index % 2 === 0 ? "bg-indigo-50" : "bg-purple-50"
                  }`}
                >

                  <td className="px-6 py-4 font-semibold text-purple-700">
                    {user.name}
                  </td>

                  <td className="px-6 py-4 text-indigo-600">
                    {user.email}
                  </td>

                  <td className="px-6 py-4 text-purple-600">
                    {user.claimType}
                  </td>

                  <td className="px-6 py-4 text-purple-600">
                    {user.message}
                  </td>

                  <td className="px-6 py-4 text-purple-700">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AdminAllQuery;
