import SkillCard from "../components/SkillCard";
import "./Skills.css";

export default function Skills() {
  const skills = [
    "C", "C++", "Javascript", "HTML5", "CSS3", "Bootstap","React",
    "Node(Basic)","Express(Basic)","GitHub","Vs code","Postman","Vercel","Netlify","NetBeans"
  ];
  <p>Use Tools</p>
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
}
