import Header from "../components/Header";
import ProjectList from "../components/Projects/ProjectList";
import SkillList from "../components/Skills/SkillList";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <SkillList />
        <Link to="skills">View All Skills</Link>
      </div>

      <div>
        <ProjectList/>
        <Link to="/projects">View All Projects</Link>
      </div>
    </div>
  );
}
