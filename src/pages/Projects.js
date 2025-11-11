import ProjectCard from "../components/ProjectCard";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce project",
      tech: "HTML, CSS, React, Node, Express = E-Commerce Website | React.js, Node.js, Express.js, MySQL Developed a full-stack e-commerce site with responsive UI and product management system, with separate frontend and backend modules",
      link: "https://fontend-6p6s.vercel.app/",
    },
    {
      title: "Weather App",
      tech: "HTML, CSS, React = Weather App | React.js, OpenWeather API Built a responsive weather app showing real-time city-based data using React.js, with useState and useEffect for API integration and dynamic UI updates",
      link: "https://reactwrite-l866.vercel.app/",
    },
    {
      title: "Tic Tac Toe Game",
      tech: "HTML, CSS, React = Weather App | React.js, OpenWeather API Built a responsive weather app showing real-time city-based data using React.js, with useState and useEffect for API integration and dynamic UI updates",
      link: "https://game-7hcp-1cqm3lxjb-kishan80090s-projects.vercel.app/",
    },
    {
      title: "Quiz App (React.js)",
      tech: "HTML, CSS, React = Quiz App (React.js) Interactive quiz application with multiple questions and real-time score display.",
      link: "https://resultshow-git-master-kishan80090s-projects.vercel.app/",
    },
    {
      title: "Simple Web",
      tech: "HTML, CSS, React = Simple Website Home, Services, Pricing, Aboute, Contac",
      link: "https://naviteproject-3vxs7pqy7-kishan80090s-projects.vercel.app/",
    },
    {
      title: "Simple Web Page",
      tech: "HTML, CSS, React, Node, Express = Developed a React Native Signup Page with background video, integrated with Node.js + Express + MySQL for secure user authentication and smooth workflow",
      link: "https://velvety-queijadas-9aac2a.netlify.app/",
    },
  ];
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
