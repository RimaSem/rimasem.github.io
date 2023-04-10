type projectProps = {
  name: string;
  img: string;
  alt: string;
  link: string;
};

function Project(props: projectProps) {
  return (
    <div className="project">
      <p>{props.name}</p>
      <img src={props.img} alt={props.alt} />
      <div className="link-wrapper">
        <a href={`https://rimasem.github.io/${props.link}/`} target="_blank">
          Demo
        </a>
        <a href={`https://github.com/RimaSem/${props.link}/`} target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;
