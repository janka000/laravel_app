import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PostPage() {
  const { id } = useParams();
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
      {/* add edit link, etc */}
    </div>
  );
}
