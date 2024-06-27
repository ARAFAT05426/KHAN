// pages/Page.js
"use client";
import Image from "next/image";
import me from "@/public/me.png";
import { useEffect, useState } from "react";
import ImageModal from "../Components/Modal/ImageModal/ImageModal";
import MyProjects from "../Components/Projects/MyProjects";
import { TbPhotoEdit } from "react-icons/tb";
import AddModal from "../Components/Modal/AddModal/AddModal";
import useProjects from "@/app/(projects)/Components/useProjects/useProjects";
import useAvatar from "@/lib/Hooks/useAvatar";

const Page = () => {
  const [isImgOpen, setImgOpen] = useState(false);
  const [isAddOpen, setAddOpen] = useState(false);
  const { projects, loading, refetch } = useProjects();
  const {avatar} = useAvatar()

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-card/75 rounded-lg p-6 tablet:p-10 laptop:p-16 w-full max-w-4xl mx-auto z-10">
        <div className="flex flex-col items-center">
          <div className="relative h-44 w-44 laptop:h-52 laptop:w-52 bg-card rounded-full overflow-hidden mb-6">
            <Image
              src={avatar ? avatar : me}
              alt="Picture of me"
              fill
              className="object-contain h-full w-full"
            />
            <button
              className="absolute bottom-4 left-3/4 transform -translate-x-1/2 bg-primary text-black rounded-full p-2 focus-within:outline-none"
              onClick={() => setImgOpen(true)}
            >
              <TbPhotoEdit size={24} />
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              onClick={() => setAddOpen(true)}
              className="px-5 py-2 bg-primary text-black rounded font-bold"
            >
              Add Project
            </button>
          </div>
          <ImageModal isOpen={isImgOpen} close={setImgOpen} />
          <AddModal isOpen={isAddOpen} close={setAddOpen} refetch={refetch} />
          <div className="overflow-x-auto w-full">
            <MyProjects
              projects={projects}
              loading={loading}
              refetch={refetch}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
