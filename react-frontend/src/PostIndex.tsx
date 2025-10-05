import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostIndex() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error("Error fetching posts:", err));
  }, []);  // ✅ Solo se ejecuta una vez

  return (
    <>
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">CRUD POST</h1>
        
        <Link to="/create" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow">
          + Create
        </Link>
      </div>

      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-gray-100 text-gray-600">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Body</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 ? posts.map((post) => (
              <tr key={post.id} className="bg-white border-b hover:bg-gray-50 transition">
                <td className="px-6 py-3 font-medium">{post.id}</td>
                <td className="px-6 py-3">{post.title}</td>
                <td className="px-6 py-3">{post.body}</td>
                <td className="px-6 py-3 flex justify-center gap-2">
                  <Link to={`/edit/${post.id}`} className="px-3 py-1 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded">
                    Edit
                  </Link>
                  <button className="px-3 py-1 text-xs font-medium text-white bg-green-600 hover:bg-green-700 rounded">
                    Show
                  </button>
                  <button className="px-3 py-1 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">No posts found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
