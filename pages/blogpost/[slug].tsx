import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
const slug = () => {
    const router = useRouter();    
    const  {slug}  = router.query;
    // console.log(router.query);
  return (
    <div className='text-center'>
      <h1 className="text-2xl font-semibold mb-2">Title of the page: {slug}</h1> 
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nesciunt aliquid distinctio excepturi ex vitae, omnis, at animi beatae atque quo id maxime consectetur nam reiciendis neque facilis mollitia natus ipsum, pariatur cum accusamus? Qui odit excepturi aliquam nostrum? Totam animi minima quasi, nulla inventore eos quisquam iure. Animi consequatur facere laudantium ducimus rem fuga. Asperiores nobis temporibus perspiciatis debitis, pariatur totam blanditiis animi modi porro molestiae illum voluptatem provident sapiente deleniti, enim ea ipsa repellat!
      </div>
        <Link href="/" className="text-blue-500 hover:underline">
        Back to home
        </Link>
    </div>
  )
}

export default slug

// BlogPost: {slug}
// <h2>
//   <Link href="/" className="text-blue-500 hover:underline">
//     Back to home
//   </Link>
// </h2>