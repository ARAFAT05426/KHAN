"use client";
import Image from "next/image";
import useAvatar from "@/lib/Hooks/useAvatar";
import me from "/public/me.png";
import "./Avatar.css"; // Import your custom CSS file

const Avatar = () => {
  const { avatar } = useAvatar();

  return (
    <div className="relative rounded-full h-[300px] w-[250px] tablet:h-[350px] tablet:w-[300px] laptop:h-[450px] laptop:w-[400px] desktop:h-[550px] desktop:w-[500px]">
      <Image
        src={avatar || me}
        alt="Avatar"
        layout="fill"
        className="object-contain p-1 blub bg-gradient-to-t from-primary to-card/50 rounded-full z-10"
      />
    </div>
  );
};

export default Avatar;
