import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
    
      <p style={{color:"white"}} ><b>
Hello! My name is Kishan Kumar Kannaujiya, and I’m from Varanasi, Uttar Pradesh. I’m currently pursuing my Bachelor of Computer Applications (BCA) and have a strong passion for technology, programming, and creating real-world digital solutions.

I’m a focused and self-motivated learner who loves exploring new frameworks and languages. Currently, I’m learning C#, which is helping me strengthen my object-oriented programming skills. Along with that, I have hands-on experience in C, C++, Java, HTML5, CSS3, JavaScript, Bootstrap, React.js, Node.js (basic), and Express.js (basic).

Over time, I’ve built several interesting projects that reflect my growth as a developer and my creativity in solving problems. Some of my key projects include:

 <span style={{color:"red"}} > E-commerce App (React)</span>: A fully responsive online shopping platform where users can explore products, add items to their cart, and proceed with checkout. It focuses on clean UI and smooth navigation.

 <span style={{color:"red"}} > Game (React & C++)</span>: A fun and interactive game built using both React (for web) and C++ (for console). This project helped me understand how logic and creativity combine to make engaging user experiences.

 <span style={{color:"red"}} > Weather App (React)</span>: A real-time weather checking application that displays live weather updates using API integration. It’s simple, fast, and visually appealing.

 <span style={{color:"red"}} > Signup Page with Video Background</span>: A modern signup and login page featuring a looping video background for a smooth and dynamic look.

 <span style={{color:"red"}} > Quiz App </span>: A dynamic quiz application that starts automatically, tracks the user’s progress, and displays results interactively.

Each of these projects has helped me learn something new — from managing APIs and handling frontend logic to designing responsive layouts and improving performance. I’ve developed a strong understanding of frontend development, and I’m continuously enhancing my backend knowledge to become a complete Full-Stack Developer.

My goal is to build scalable and efficient web applications that provide great user experiences. I enjoy working with React for its flexibility and plan to master Node.js and Express.js to strengthen my backend development skills.

Outside of coding, I love exploring new technologies, learning through practical implementation, and watching tutorials to improve my skills. I believe that consistency, curiosity, and real-world practice are the keys to becoming a successful developer.

In the future, I aim to contribute to meaningful projects that have a positive impact and continue to grow as a developer. I see programming not just as a career path but as a way to bring ideas to life and make technology more accessible to everyone.

In short, I’m a passionate BCA student and aspiring full-stack developer from Varanasi who loves coding, creating, and continuously learning.
    </b></p>

      <Link className="about-link" to="/projects">View My Work →</Link>
    </section>
  );
}
