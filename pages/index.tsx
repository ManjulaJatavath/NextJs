import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Head from 'next/head'; 
// import Script from 'next/script';
import Button from "@/components/Button";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const res= await fetch('https://jsonplaceholder.typicode.com/posts')

  const posts = await res.json();

  return {
    props: {posts},
  };
}


const Home = ({ posts }: { posts: any[] }) => {
  const handleClick = () => {
    alert('Button clicked!')
  }
  const [data, setData]=useState<{ message: string }>({ message: '' });

  useEffect(()=>{
    fetch('/api/Hello')
    .then((res)=>res.json())
    .then((data)=>setData(data))
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="A description of the home page" />
        <meta name="keywords" content="nextjs, huntingcoder blog, hunting coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script
        src="/sc.tsx"
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Script loaded');
        }}
      /> */}
      <main className="main mt-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-400">
          Hunting Coder
        </h1>
        <div className="rounded-lg flex justify-center items-center">
      {/* <Image
        src="NextJs/home.jpg"
        alt="Description of the image"
        width={600}
        height={300}
        className="object-cover rounded-lg shadow-md" // Image styles
      /> */}
      <img src="NextJs/home.jpg" alt="" />
    </div>
        <p className="text-xl mb-8">
          A blog for hunting coders by a hunting coder
        </p>
        <Button label="Click Me" onClick={handleClick} />
        <div className=" items-center justify-center">
        <h1 className="text-2xl">{data.message}</h1>
        </div>
    {/* <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post)=>(
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div> */}
      <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts.slice(0, 5).map((post) => (
        <li key={post.id} className="mb-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
      </ul>
    </div>
      </main>
    </div>
  );
};

export default Home;






















// const inter = Inter({ subsets: ["latin"] });

// interface Geo {
//   lat: string;
//   lng: string;
// }

// interface Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }

// interface Company {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Address;
//   phone: string;
//   website: string;
//   company: Company;
// }

// interface HomeProps {
//   users: User[];
// }

// export default function Home({ users }: HomeProps) {
//   console.log(users);

//   return (
//     <div className="bg-gray-100">
//       <main className="items-center justify-center p-6">
//         <div className="text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Users Profile's <a href="/" className="text-blue-500">Application</a>
//           </h1>
//           <p className="text-lg text-gray-600">
//             Welcome to the User Profile Application. Manage your profile, view details, and more.
//           </p>
//           {/* <UsersList users={users} /> */}
//               <h1 className='text-2xl font-bold'>
//           Read{' '}
//           <Link href="/posts/first-post" className="text-blue-500 hover:underline">
//             this page!
//           </Link>
//         </h1>
//         </div>
//       </main>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users: User[] = await res.json();

//   return {
//     props: {
//       users,
//     },
//   };
// }
