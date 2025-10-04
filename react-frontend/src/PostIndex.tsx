export default function PostIndex(){
  return (
    <>
    
     <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">CRUD POST</h1>
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow">
          + Create
        </button>
      </div>

      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-gray-100 text-gray-600">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Body</th>
              <th scope="col" className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50 transition">
              <td className="px-6 py-3 font-medium">1</td>
              <td className="px-6 py-3">Example Title</td>
              <td className="px-6 py-3">Example Body</td>
              <td className="px-6 py-3 flex justify-center gap-2">
                <button className="px-3 py-1 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded">Edit</button>
                <button className="px-3 py-1 text-xs font-medium text-white bg-green-600 hover:bg-green-700 rounded">Show</button>
                <button className="px-3 py-1 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
