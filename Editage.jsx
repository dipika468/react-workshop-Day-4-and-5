import { useState } from 'react';

function Editage() {
  const [title, setTitle] = useState("My Page");
  const [desc, setDesc] = useState("This is a short description.");

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edit Page</h2>

      {/* Page Title */}
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Page Title"
        className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Description */}
      <textarea
        value={desc}
        onChange={e => setDesc(e.target.value)}
        placeholder="Description"
        className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Cancel</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Save
        </button>
      </div>
    </div>
  );
}

export default Editage;
