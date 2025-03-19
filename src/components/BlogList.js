import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const BlogList = () => {
  const { blogs } = useContext(BlogContext);
  const [search, setSearch] = useState("");

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search blog posts..."
        onChange={(e) => setSearch(e.target.value)}
        style={styles.searchInput}
      />
      <ul style={styles.list}>
        {blogs
          .filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
          .map((blog) => (
            <li key={blog.id} style={styles.listItem}>
              <Link to={`/blog/${blog.id}`} style={styles.link}>
                {blog.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: "20px",
  },
  searchInput: {
    padding: "10px",
    width: "100%",
    fontSize: "18px",
    marginBottom: "15px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "10px",
  },
  link: {
    textDecoration: "none",
    color: "black", 
    fontSize: "20px", 
    fontWeight: "bold",
  },
};

export default BlogList;
