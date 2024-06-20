import { skills } from "./SkillsList";

const Skills = () => {
  return (
    <div className="grid grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-6 gap-3 py-5">
      {skills.map((skill, i) => {
        const IconComponent = skill.icon;
        return (
          <div
            key={i}
            className="relative w-full h-14 tablet:w-full tablet:h-16 laptop:w-full laptop:h-20 desktop:w-full desktop:h-24 bg-card/50 rounded overflow-hidden transition-transform duration-300 hover:scale-105 z-[5] flex items-center justify-center"
          >
            <IconComponent className="text-primary text-3xl tablet:text-4xl laptop:text-5xl" />
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
