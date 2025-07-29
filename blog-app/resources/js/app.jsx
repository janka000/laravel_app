import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import BlogMain from './components/BlogMain';
import PostPage from './components/PostPage';

const el = document.getElementById('app');

if (el) {
  const post = el.dataset.post ? JSON.parse(el.dataset.post) : null;
  const posts = el.dataset.posts ? JSON.parse(el.dataset.posts) : null;

  ReactDOM.createRoot(el).render(
    post ? <PostPage post={post} /> : <BlogMain posts={posts ?? []} />
  );
}
