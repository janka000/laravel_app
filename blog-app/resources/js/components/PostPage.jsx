import React from 'react';

export default function PostPage({ post }) {
  return (
    <main className="container my-5">
      <div className="col-md-8 offset-md-2">
        <h1 className="mb-4">{post.title}</h1>
        <p className="lead">{post.body}</p>
        <a href="/" className="btn btn-outline-primary mt-4">← Back to Blog</a>
      </div>
    </main>
  );
}
