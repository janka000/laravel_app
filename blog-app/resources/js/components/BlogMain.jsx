import React from 'react';

export default function BlogMain({ posts }) {
  return (
    <main className="container my-5">
      <h1 className="mb-4 text-center">My Blog</h1>
      <div className="text-center mb-4">
        <a href="/posts/create" className="btn btn-primary">+ New Post</a>
      </div>

      {posts.length === 0 && (
        <p className="text-center text-muted">No posts found.</p>
      )}

      <div className="row">
        {posts.map(post => (
          <article key={post.id} className="col-md-8 offset-md-2 mb-4">
            <a
              href={`/posts/${post.id}`}
              className="text-decoration-none text-dark"
              style={{ display: 'block' }}
            >
              <div className="card shadow-sm hover-shadow">
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <p className="card-text text-truncate">{post.body}</p>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
