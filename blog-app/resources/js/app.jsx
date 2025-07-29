import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BlogMain from './components/BlogMain';
import PostPage from './components/PostPage';
import EditPost from './components/EditPost';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';

const el = document.getElementById('app');

if (el) {
  const posts = el.dataset.posts ? JSON.parse(el.dataset.posts) : [];

  ReactDOM.createRoot(el).render(
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogMain posts={posts} />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
          <Route path="/posts/create" element={<CreatePost />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
