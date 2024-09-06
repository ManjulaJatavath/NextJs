import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Blog {
    title: string;
    content: string;
    author: string;
    slug: string;
  }
  

const Blog = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    console.log("Use effect is running");

    fetch('http://localhost:3000/api/blogs')
      .then((a) => a.json())
      .then((parsed) => {
        // console.log(parsed);
        setBlogs(parsed);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="blogs space-y-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Latest Blogs</h1>
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="blogItem p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out text-center"
          >
                        <h1 className="text-gray-700">Author: {blog.author}</h1>
            <h1 className="text-2xl font-semibold mb-3">{blog.title}</h1>
            <p className="text-gray-700">
            {blog.content.length > 150 ? `${blog.content.slice(0, 150)}...` : blog.content}
            <Link href={`/blogpost/${blog.slug}`} className="text-blue-500 ml-2">
              Read more
            </Link>
          </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
