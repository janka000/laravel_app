import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

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

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setDeleting(true);
      axios.delete(`/api/posts/${id}`)
        .then(() => {
          navigate('/');
        })
        .catch(() => {
          setDeleting(false);
          alert('Failed to delete the post.');
        });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found.</div>;

  return (
    <div className="container mt-5 mb-5">
      <h1>{post.title}</h1>
      <ReactMarkdown>
        {post.body}
      </ReactMarkdown>

      <div style={{ marginTop: '20px' }}>
        {/* Back to posts page */}
        <button onClick={() => navigate('/')} className="btn btn-secondary me-2">
          Back to Posts
        </button>

        {/* Edit post page */}
        <Link to={`/posts/${id}/edit`} className="btn btn-primary me-2">
          Edit Post
        </Link>

        {/* Delete post button */}
        <button
          onClick={handleDelete}
          className="btn btn-danger"
          disabled={deleting}
        >
          {deleting ? 'Deleting...' : 'Delete Post'}
        </button>
      </div>
    </div>
  );
}
