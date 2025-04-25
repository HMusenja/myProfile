import React from 'react';

const DashboardTable = ({ projects, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td className="px-4 py-2 border">{project.title}</td>
              <td className="px-4 py-2 border">{project.description}</td>
              <td className="px-4 py-2 border flex gap-2 justify-center">
                <button onClick={() => onEdit(project)} className="bg-yellow-500 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button onClick={() => onDelete(project._id)} className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
