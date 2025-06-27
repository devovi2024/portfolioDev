import Header from "../components/Header";
import ProjectList from "../components/Projects/ProjectList";
import ServiceList from "../components/Services/ServiceList";
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

      <div>
        <ServiceList/>
        <Link to="/service">View All Service</Link>
      </div>
    </div>
  );
}
