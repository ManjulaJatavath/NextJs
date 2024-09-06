import React from "react";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import Link from "next/link";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface UserPageProps {
  user: User | null;
}

const UserPage: React.FC<UserPageProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="p-4 flex justify-center">
        <p className="text-red-500">User not found</p>
      </div>
    );
  }

  return (
    <div className="p-4 flex justify-center">
      <main className="w-full max-w-2xl mx-auto">
        <div
          key={user.id}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-300 transition-transform transform hover:scale-105 hover:border-blue-500"
        >
          <p className="text-xl font-semibold text-gray-800 mb-2">
            Name: {user.name}
          </p>
          <p className="text-gray-600 mb-1">Username: {user.username}</p>
          <p className="text-gray-600 mb-1">Email: {user.email}</p>
          <p className="text-gray-600 mb-1">Phone: {user.phone}</p>
          <p className="text-gray-600 mb-1">
            Address: {user.address?.street || 'N/A'}, {user.address?.suite || 'N/A'}, {user.address?.city || 'N/A'}, {user.address?.zipcode || 'N/A'}
          </p>
          <p className="text-gray-600 mb-1">
            Location: Lat {user.address?.geo?.lat || 'N/A'}, Lng {user.address?.geo?.lng || 'N/A'}
          </p>
          <p className="text-blue-500 hover:underline">
            Website:{" "}
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </p>
          <p className="text-gray-600 mb-1">
            Company: {user.company ? user.company.name : 'N/A'}
          </p>
          {user.company ? (
            <>
              <p className="text-gray-600 mb-1">
                Catchphrase: {user.company.catchPhrase || 'N/A'}
              </p>
              <p className="text-gray-600 mb-1">
                Business Strategy: {user.company.bs || 'N/A'}
              </p>
            </>
          ) : (
            <p className="text-gray-600 mb-1">Company information not available</p>
          )}
        <Link href="/users" className="text-blue-500 hover:underline">
        Back to Users
      </Link>
        </div>
      </main>

    </div>
  );
};

export const getStaticProps: GetStaticProps<UserPageProps> = async ({ params }: GetStaticPropsContext) => {
  const id = params?.id as string;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: { user: user || null }, // Ensure user is null if not found
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();
  const paths = users.map(user => ({
    params: { id: user.id.toString() }
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default UserPage;
