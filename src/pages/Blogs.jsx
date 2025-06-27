import BlogList from "../components/Blogs/BlogList";

export default function Blogs() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Latest Blogs</h2>
      <BlogList />
    </div>
  );
}
