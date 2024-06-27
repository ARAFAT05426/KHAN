"use client";
import Image from "next/image";
import { MdDeleteForever, MdMovieEdit } from "react-icons/md";
import { useState } from "react";
import DeleteModal from "../Modal/DeleteModal/DeleteModal";
import LoadingBar from "@/app/Components/LoadingBar/LoadingBar";
import UpdateModal from "../Modal/UpdateModal/UpdateModal";
import { LuPenTool } from "react-icons/lu";

const MyProjects = ({ projects, loading, refetch }) => {
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isUpdateOpen, setUpdateOpen] = useState(false);
  const [actUpdate, setUpdate] = useState(null);

  const handleDelete = (id) => {
    setDeleteOpen(true);
  };

  return (
    <>
      <div className="p-5">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-800/75 p-1">
            <thead>
              <tr className="text-primary/90 font-extrabold text-sm laptop:text-base">
                <th className="px-4 py-2 border border-gray-800/75">#</th>
                <th className="px-4 py-2 border border-gray-800/75">Image</th>
                <th className="px-4 py-2 border border-gray-800/75">Title</th>
                <th className="px-4 py-2 border border-gray-800/75">Category</th>
                <th className="px-4 py-2 border border-gray-800/75">Edit</th>
                <th className="px-4 py-2 border border-gray-800/75">Delete</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="text-center p-5">
                    <LoadingBar />
                  </td>
                </tr>
              ) : (
                projects.map((project, index) => (
                  <tr key={index} className="text-gray-500 font-semibold text-xs laptop:text-sm">
                    <td className="px-4 py-2 border border-gray-800/75 text-center">
                      {project?.num}
                    </td>
                    <td className="px-4 py-2 border border-gray-800/75 text-center">
                      <div className="relative h-10 w-12 mx-auto">
                        <Image
                          src={project?.image}
                          alt={project?.title}
                          width={48}
                          height={48}
                          className="rounded"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 border border-gray-800/75">
                      {project?.title}
                    </td>
                    <td className="px-4 py-2 border border-gray-800/75">
                      {project?.category}
                    </td>
                    <td className="px-4 py-2 border border-gray-800/75 text-primary/75 text-center">
                      <LuPenTool
                        onClick={() => {
                          setUpdate(project);
                          setUpdateOpen(true);
                        }}
                        size={25}
                        className="w-fit mx-auto cursor-pointer"
                      />
                    </td>
                    <td className="px-4 py-2 border border-gray-800/75 text-red-500/75 text-center">
                      <MdDeleteForever
                        onClick={() => handleDelete(project?._id)}
                        size={25}
                        className="w-fit mx-auto cursor-pointer z-10"
                      />
                      <DeleteModal
                        isOpen={isDeleteOpen}
                        close={setDeleteOpen}
                        id={project?._id}
                        refetch={refetch}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <UpdateModal
        isOpen={isUpdateOpen}
        project={actUpdate}
        close={setUpdateOpen}
        refetch={refetch}
      />
    </>
  );
};

export default MyProjects;
