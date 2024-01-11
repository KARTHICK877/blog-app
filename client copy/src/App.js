// App.js
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import ImageComponent from "./pages/ImageComponent";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserBlogs from "./pages/UserBlogs";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import { Toaster } from "react-hot-toast";

function App() {
  const [showImage, setShowImage] = useState(true);
  const [showBlogs, setShowBlogs] = useState(false);

  const handleImageTimeout = () => {
    setShowImage(false);
    setShowBlogs(true);
  };

  return (
    <>
      <Header />
      <Toaster />
      {showImage && (
        <ImageComponent
        videoPath={'./one.mp4'} // Replace with the actual image path
          duration={6000} // 7 seconds
          onTimeout={handleImageTimeout}
        />
      )}
      {showBlogs && (
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/my-blogs" element={<UserBlogs />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </>
  );
}

export default App;
