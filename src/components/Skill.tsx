import "./scss/Skill.scss";

interface SkillProps {
  img: string;
  name: string;
}

function Skill({ img, name }: SkillProps) {
  return (
    <div className="skill">
      <img src={img} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default Skill;
