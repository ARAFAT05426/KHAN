import React from "react";
import { projects } from "@/app/(projects)/Components/projectlist/ProjectList";
import Image from "next/image";
import { MdDeleteForever, MdMovieEdit } from "react-icons/md";
const MyProjects = () => {
  return (
    <div className="p-5">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-card/50 border border-card">
          <thead>
            <tr className=" text-gray-400">
              <th className="px-4 py-2 border border-card">#</th>
              <th className="px-4 py-2 border border-card">Image</th>
              <th className="px-4 py-2 border border-card">Title</th>
              <th className="px-4 py-2 border border-card">Category</th>
              <th className="px-4 py-2 border border-card">Stack</th>
              <th className="px-4 py-2 border border-card">Edit</th>
              <th className="px-4 py-2 border border-card">Delete</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map((project, index) => (
              <tr key={index} className="text-gray-500">
                <td className="px-4 py-2 border border-card text-center">
                  {project.num}
                </td>
                <td className="px-4 py-2 border border-card text-center">
                  <div className="relative h-10 w-12">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded"
                    />
                  </div>
                </td>
                <td className="px-4 py-2 border border-card">
                  {project.title}
                </td>
                <td className="px-4 py-2 border border-card">
                  {project.category}
                </td>
                <td className="px-4 py-2 border border-card">
                  {project.stack.join(", ")}
                </td>
                <td className="px-4 py-2 border border-card text-primary text-center">
                  <MdMovieEdit size={25} className="w-fit mx-auto" />
                </td>
                <td className="px-4 py-2 border border-card text-primary text-center">
                  <MdDeleteForever size={25} className="w-fit mx-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProjects;
