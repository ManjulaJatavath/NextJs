import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import * as fs from 'fs';
interface Blog {
    title: string;
    content: string;
    author: string;
    slug: string;
  }
  
  interface BlogProps {
    allBlogs: Blog[];
  }

const Blog: React.FC<BlogProps> = ({ allBlogs }) => {
  const [blogs, setBlogs] = useState<Blog[]>(allBlogs);

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
            <Link href={`${blog.slug}`} className="text-blue-500 ml-2">
              Read more
            </Link>
          </p>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  let data = await fs.promises.readdir("blogdata");
    let myfile;
    let allBlogs=[]
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      myfile = await fs.promises.readFile('blogdata/' + item, 'utf-8');
      allBlogs.push(JSON.parse(myfile))
    }

  return {
    props: { allBlogs },
  };
}

export default Blog;



// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/NextJs/api/blogs`); // Use absolute URL
//   const allBlogs = await res.json();

//   return {
//     props: { allBlogs },
//   };
// }

// export default Blog;
