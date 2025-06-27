import blogs from "../../assets/blogsData.json";
import BlogCard from "./BlogCard";

export default function BlogList() {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
