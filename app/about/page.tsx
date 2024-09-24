import FakeTerminalWindow from "../components/about/FakeTerminalWindow";
import Prompt from "../components/about/Prompt";
import { skills } from "../../lib/constants";

const SkillList = ({ title, items }: { title: string; items: string[] }) => (
  <>
    <li className="text-secondary font-semibold">{title}/</li>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </>
);

const About = () => {
  return (
    <div className="space-y-10 my-10 break-words">
      {/* general bio */}
      <FakeTerminalWindow>
        <Prompt content="cd aboutNur/" />
        <Prompt directory="/aboutNur" branch={true} content="cat README.md" />
        <p>
          Hello there! I'm Nur, a Full Stack Dev <b>from Bangladesh</b>,
          specializing in <b>React, Redux, NodeJS/Express, and NextJS</b>. I've
          been working professionally as a developer for about 1 year now, and
          I'm currently focused on learning PostgreSQL and Prisma.
        </p>
      </FakeTerminalWindow>

      {/* skills & tools */}
      <FakeTerminalWindow>
        <Prompt content="cd skillsAndTools/Proficient" />
        <Prompt
          directory="/skillsAndTools/Proficient"
          branch={true}
          content="ls"
        />
        <div className="flex justify-start flex-wrap md:justify-between">
          <ul>
            <SkillList title="TheObvious" items={skills.theObvious} />
            <SkillList title="ToolsOfTheTrade" items={skills.toolsOfTheTrade} />
          </ul>
          <ul className="md:text-right">
            <SkillList
              title="LibrariesAndFrameworks"
              items={skills.librariesFrameworks}
            />
          </ul>
        </div>
      </FakeTerminalWindow>

      {/* academic background */}
      <FakeTerminalWindow>
        <Prompt content="cd academicBackground/" />
        <Prompt directory="/academicBackground" branch={true} content="ls" />
        <ul className="space-y-2">
          <li>
            <b>Govt. Madrasah-e-Alia, Dhaka</b> <br />
            Fazil Honors 2nd Year in Al-Quran and Islamic Studies
          </li>
          <li>
            <b>Tamirul Millat Kamil Madrasah, Gazipur</b> <br />
            Alim, Science (2021) - GPA 5.00
          </li>
          <li>
            <b>Darunnazat Siddilia Kamil Madrasah, Dhaka</b> <br />
            Dakhil, Science (2019) - GPA 4.78
          </li>
        </ul>
      </FakeTerminalWindow>

      {/* hobbies / interests */}
      <FakeTerminalWindow>
        <Prompt content="cd HobbiesAndInterests/" />
        <Prompt directory="/HobbiesAndInterests" branch={true} content="ls" />
        <ul>
          <li>📚 Reading</li>
          <li>🎬 Movies</li>
          <li>🏃‍♂️ Running</li>
          <li>👨‍🏫 Teaching</li>
          <li>👩🏻‍🌾 Gardening</li>
        </ul>
      </FakeTerminalWindow>
    </div>
  );
};

export default About;
