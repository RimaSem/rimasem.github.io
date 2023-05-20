import "./scss/Skill.scss";

interface SkillProps {
  img: string;
  name: string;
}

const Skill: React.FC<SkillProps> = ({ img, name }) => (
  <div className="skill">
    <img src={img} alt={name} />
    <span>{name}</span>
  </div>
);

export default Skill;
