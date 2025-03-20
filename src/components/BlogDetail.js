import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const BlogDetail = () => {
  const { id } = useParams();
  const { blogs } = useContext(AuthContext);
  const blog = blogs.find((b) => b.id === parseInt(id));

  // State for likes and comments
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  if (!blog) return <div className="text-center fs-4">Loading...</div>;

  // Function to handle adding comments
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment(""); // Clear input field
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h1 className="fw-bold">{blog.title}</h1>
        <p className="mt-3 text-secondary">{blog.body}</p>

        {/* Like Button with Different Color Count */}
        <button
          onClick={() => setLikes(likes + 1)}
          className="btn btn-primary mt-3"
        >
          👍 Like <span className="fw-bold text-warning">{likes}</span>
        </button>

        {/* Comments Section */}
        <div className="mt-4">
          <h2 className="fs-4">Comments</h2>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="form-control mt-2"
            placeholder="Add a comment..."
          />
          <button
            onClick={handleAddComment}
            className="btn btn-success mt-2"
          >
            Add Comment
          </button>

          {/* Display Comments */}
          <ul className="list-group mt-3">
            {comments.map((comment, index) => (
              <li key={index} className="list-group-item">
                {comment}
              </li>
            ))}
          </ul>
        </div>

        {/* Back to List Button */}
        <Link to="/" className="btn btn-link mt-4">
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
