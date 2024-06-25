"use client";
import Image from "next/image";
import me from "@/public/me.png";
import { useState } from "react";
import ImageModal from "../Components/Modal/ImageModal/ImageModal";
import MyProjects from "../Components/Projects/MyProjects";
import { TbPhotoEdit } from "react-icons/tb";
import AddModal from "../Components/Modal/AddModal/AddModal";

const Page = () => {
  const [isImgOpen, setImgOpen] = useState(false);
  const [isAddOpen, setAddOpen] = useState(false);
  return (
    <section className="w-fit bg-card/50 p-5 laptop:p-10 rounded-xl flex flex-col justify-center items-center m-auto">
      <div className="relative h-52 w-52 mx-auto bg-card/25 rounded-full p-3 overflow-hidden shadow-lg">
        <Image
          src={me}
          className="object-contain"
          alt="Picture of me"
          layout="fill"
        />
        <button className="absolute bottom-4 left-3/4 transform -translate-x-1/2 z-10">
          <TbPhotoEdit
            size={45}
            onClick={() => setImgOpen(true)}
            className="text-card bg-primary rounded-full p-2"
          />
        </button>
      </div>
      <div className="mt-7 flex gap-5">
        <button className="px-5 py-[2px] bg-primary text-card rounded font-bold">
          Change cv
        </button>
        <button
          onClick={() => setAddOpen(true)}
          className="px-5 py-[2px] bg-primary text-card rounded font-bold"
        >
          Add Project
        </button>
      </div>
      <ImageModal isOpen={isImgOpen} close={setImgOpen} />
      <AddModal isOpen={isAddOpen} close={setAddOpen} />
      <MyProjects />
    </section>
  );
};

export default Page;
