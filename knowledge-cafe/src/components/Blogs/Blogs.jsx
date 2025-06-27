import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching blog data:", error);
        setError("Failed to load blogs.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4 text-center text-lg">Loading blogs...</p>;
  if (error) return <p className="p-4 text-center text-red-500">{error}</p>;

  return (
    <div className="space-y-6">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blogs;
