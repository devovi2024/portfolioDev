import Header from "../components/Header";
import ProjectList from "../components/Projects/ProjectList";
import ServiceList from "../components/Services/ServiceList";
import SkillList from "../components/Skills/SkillList";
import BlogCard from "../components/Blogs/BlogCard";
import { Link } from "react-router-dom";
import blogs from "../assets/blogsData.json"; 
export default function Home() {
  const recentBlogs = blogs.slice(0, 3);

  return (
    <div>
      <Header />

      <div>
        <SkillList />
        <Link to="/skills">View All Skills</Link>
      </div>

      <div>
        <ProjectList />
        <Link to="/projects">View All Projects</Link>
      </div>

      <div>
        <ServiceList />
        <Link to="/service">View All Service</Link>
      </div>

      <div>
        <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Recent Blogs</h2>
        <div className="blog-list">
          {recentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} /> 
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link to="/blogs">View All Blogs</Link>
        </div>
      </div>
    </div>
  );
}
