import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/posts/${id}`)
      .then(res => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(() => {
        setPost(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found.</div>;

  return (
    <div className="container mt-5">
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <div style={{ marginTop: '20px' }}>
        {/* Back to posts page */}
        <button onClick={() => navigate('/')} className="btn btn-secondary me-2">
          Back to Posts
        </button>

        {/* Edit post page */}
        <Link to={`/posts/${id}/edit`} className="btn btn-primary">
          Edit Post
        </Link>
      </div>
    </div>
  );
}
