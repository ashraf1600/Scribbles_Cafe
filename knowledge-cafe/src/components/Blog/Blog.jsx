import React from 'react';

function Blog({ blog }) {
  const {
    cover,
    title,
    name,
    author,
    author_image,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow border mb-8">
      {/* Cover Image */}
      <img
        src={cover}
        alt={title || "Blog cover"}
        className="w-full h-64 object-cover rounded-t-lg"
      />

      {/* Blog Content */}
      <div className="p-6">
        {/* Author, Date, Reading Time */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <div className="flex items-center">
            <img
              src={author_image}
              alt={author || "Author"}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="font-semibold mr-2">{author}</span>
            <span className="text-gray-400">|</span>
            <span className="ml-2">{posted_date} ({name})</span>
          </div>
          <span>{reading_time}</span>
        </div>

        {/* Blog Title */}
        <h2 className="text-2xl font-bold mb-2 leading-tight">{title}</h2>

        {/* Hashtags */}
        <div className="flex flex-wrap mb-3">
          {hashtags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Mark as read */}
        <a
          href="#"
          className="text-blue-600 text-sm underline hover:text-blue-800"
        >
          Mark as read
        </a>
      </div>
    </div>
  );
}

export default Blog;
