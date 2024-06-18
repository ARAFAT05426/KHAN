import Image from "next/image";
import { skills } from "./SkillsArray";

const Skills = () => {
  return (
    <div className="grid grid-cols-6 tablet:grid-cols-8 gap-3 laptop:gap-5">
      {skills?.map((skill, i) => (
        <div
          key={i}
          className="relative w-12 h-12  tablet:w-16 tablet:h-16 laptop:w-16 laptop:h-16 desktop:w-20 desktop:h-20 bg-card/50 rounded overflow-hidden transition-all duration-300 hover:scale-105"
        >
          <Image
            src={skill}
            alt={`Skill ${i + 1}`}
            layout="fill"
            objectFit="contain"
            className="p-3"
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;
