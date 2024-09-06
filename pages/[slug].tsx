import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as fs from 'fs';

interface Blog {
  title: string;
  content: string;
  author: string;
  slug: string;
}

interface SlugProps {
  blog: Blog;
}

const Slug: React.FC<SlugProps> = ({ blog }) => {
  return (
    <div className='text-center'>
      {blog ? (
        <>
          <h1 className="text-2xl font-semibold mb-2">{blog&&blog.title}</h1>
          <hr />
          <div>{blog&&blog.content}</div>
          <p><strong>Author:</strong> {blog.author}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Link href="/" className="text-blue-500 hover:underline">
        Back to home
      </Link>
    </div>
  );
};

export async function getStaticPaths(context:any) {

  return {
    paths: [
      { params: { slug:"how-to-learn-React"  }},
      {
        params: { slug:"how-to-learn-NextJs" },
      },
      {
        params: { slug:"how-to-learn-python" },
      },
    ],
    fallback:true
  }
}

export async function getStaticProps(context:any) {
  console.log(context);  
  const { slug } = context.params
  let myblog = await fs.promises.readFile(`blogdata/${context.params.slug}.json`, 'utf-8');
  const blog = JSON.parse(myblog);
  return {
    props: { blog },
  };
}

// export async function getServerSideProps(context:any) {
//   const { slug } = context.query;
//   const data = await fetch(`http://localhost:3000/NextJs/api/getblog?slug=${slug}`)
//   const blog = await data.json();

//   return {
//     props: { blog },
//   };
// }

export default Slug;
