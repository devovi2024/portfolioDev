import { useParams, Link } from "react-router-dom";
import blogs from "../assets/blogsData.json";

export default function BlogPostDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => String(b.id) === id);

  if (!blog) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "red" }}>
        Blog not found!
      </div>
    );
  }

  return (
    <div className="blog-details">
      <img src={blog.image} alt={blog.title} className="blog-details-image" />
      <h1 className="blog-details-title">{blog.title}</h1>
      <p className="blog-details-meta">
        By <span>{blog.author}</span> • {blog.date}
      </p>
      <p className="blog-details-content">{blog.content}</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/blogs">← Back to Blogs</Link>
      </div>
    </div>
  );
}
