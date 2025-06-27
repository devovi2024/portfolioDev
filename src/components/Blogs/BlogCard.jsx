import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link to={`/blogs/${blog.id}`} className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-content">
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-meta">
          By <span>{blog.author}</span> • {blog.date}
        </p>
        <p className="blog-summary">{blog.summary}</p>
      </div>
    </Link>
  );
}
