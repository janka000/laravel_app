import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', body: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/posts/${id}`).then(res => {
      setPost(res.data);
      setLoading(false);
    });
  }, [id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/posts/${id}`, post)
      .then(() => navigate(`/posts/${id}`));
  };

  if (loading) return <div className="container mt-5">Loading…</div>;

  return (
    <div className="container mt-5">
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input name="title" className="form-control" value={post.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea name="body" className="form-control" rows="6" value={post.body} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
