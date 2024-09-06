import { GetStaticProps } from 'next';
import UsersList from '../components/UsersList';

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

interface UsersPageProps {
  users: User[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center p-4">Users List</h1>
      <UsersList users={users} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return {
    props: { users },
  };
};

export default UsersPage;
