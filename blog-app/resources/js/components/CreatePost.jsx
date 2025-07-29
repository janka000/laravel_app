import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', body: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('/api/posts', post)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch(() => {
        setLoading(false);
        // You might want to handle errors here (show messages)
      });
  };

  return (
    <div className="container mt-5">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            name="title"
            className="form-control"
            value={post.title}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea
            name="body"
            className="form-control"
            rows="6"
            value={post.body}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        <button className="btn btn-primary" disabled={loading}>
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}
