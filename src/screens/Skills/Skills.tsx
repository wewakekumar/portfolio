import Image from "next/image";

import { mySkills } from "@/constants/mySkills";
import Card from "@/components/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-8 my-8">
      <h2 className="text-3xl">My Skills</h2>
      <div className="flex flex-col gap-4">
        {mySkills.map((skills) => (
          <div className="flex justify-center gap-4">
            {skills.map((skill) => (
              <Card>
                <div className="flex flex-col items-center justify-center gap-y-4 p-y-4 h-full">
                  <div className="w-8 h-8">
                    {skill.faIcon ? (
                      <FontAwesomeIcon
                        icon={skill.faIcon}
                        style={skill?.style}
                      />
                    ) : (
                      <Image src={skill.iconUrl} alt={`${skill.title}-icon`} />
                    )}
                  </div>
                  <p>{skill.title}</p>
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
