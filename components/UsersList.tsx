import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
  phone: string;
  website: string;
}

interface UsersListProps {
  users: User[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <main className="w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-300 transition-transform transform hover:scale-105 hover:border-blue-500"
            >
              <p className="text-xl font-semibold text-gray-800 mb-2">Name: {user.name}</p>
              <p className="text-gray-600 mb-1">Email: {user.email}</p>
              <p className="text-gray-600 mb-1">Company: {user.company.name}</p>
              <p className="text-gray-600 mb-1">Phone: {user.phone}</p>
              <p className="text-blue-500 hover:underline">
                Website:{' '}
                <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a>
              </p>
              <a
                className="text-blue-500 no-underline"
                href={`/NextJs/user/${user.id}`}
              >
                Know More
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default UsersList;
