import Header from "../components/Header";
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
    </div>
  );
}
