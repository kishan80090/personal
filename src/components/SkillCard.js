import { motion } from "framer-motion";
import "./SkillCard.css";

export default function SkillCard({ skill }) {
  return (
    <motion.div
      className="skill-card"
      whileHover={{ scale: 1.05 }}
    >
      {skill}
    </motion.div>
  );
}
