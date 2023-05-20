interface ProjectProps {
  name: string;
  img: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({ name, img, link }) => (
  <div className="project">
    <p>{name}</p>
    <img src={img} alt={name} />
    <div className="link-wrapper">
      <a href={`https://rimasem.github.io/${link}/`} target="_blank">
        Demo
      </a>
      <a href={`https://github.com/RimaSem/${link}/`} target="_blank">
        GitHub
      </a>
    </div>
  </div>
);

export default Project;
