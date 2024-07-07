// /components/ui/TableUser.tsx
import React from 'react';

interface User {
  id: number;
  name: string;
  gender: string;
  age: number;
  email: string;
  routeId?: number | null;
  phone: string | null;
}

interface TableUserProps {
  users: User[];
}

const TableUser: React.FC<TableUserProps> = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full mx-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Género</th>
            <th className="px-4 py-2">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.gender}</td>
              <td className="border px-4 py-2">{user.phone || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
