import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

const BlogDetail = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find((b) => b.id === parseInt(id));

  // State for likes and comments
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  if (!blog) return <div className="text-center text-lg">Loading...</div>;

  // Function to handle likes
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Function to handle adding comments
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment(""); // Clear input field
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      {/* Blog Content */}
      <p className="text-gray-700 mb-4">{blog.body}</p>

      {/* Like Button */}
      <button
        onClick={handleLike}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        👍 Like {likes}
      </button>

      {/* Comment Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Comments</h2>
        <ul className="mb-4">
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet.</p>
          ) : (
            comments.map((comment, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded my-2">
                {comment}
              </li>
            ))
          )}
        </ul>

        {/* Comment Input */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={handleAddComment}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Add
          </button>
        </div>
      </div>

      {/* Back to List Button */}
      <div className="mt-6">
        <Link
          to="/"
          className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Back to Blog List
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
