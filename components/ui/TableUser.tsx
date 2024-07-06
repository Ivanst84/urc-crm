import { User } from "@prisma/client";


type UserTableProps = { 
    users: User[]
    }
export default function TableUser({users}: UserTableProps) {
    return (


        <div className="overflow-x-auto">
      <table className="table-auto w-full mx-auto">                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Genero</th>
                        <th className="px-4 py-2">Télefono</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="border px-4 py-2">{user.id}</td>
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.gender}</td>
                            <td className="border px-4 py-2">{user.phone}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}