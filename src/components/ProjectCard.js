import "./ProjectCard.css";

export default function ProjectCard({ title, tech, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{tech}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}
