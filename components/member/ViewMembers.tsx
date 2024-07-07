import TableUser from '../ui/TableUser';
import Heading from '../ui/Heading';
import { User } from "@prisma/client"
import { getMembersAction } from '@/action/get-members-action';

type  MemberFormProps = {
    user?:User
}

export default async function MemberList({ user}:MemberFormProps) {
    const members = await getMembersAction()

  return (
    <div className="w-full max-w-md mx-auto ml-[-180px] -mt-52">
      <Heading>
        Lista de Miembros
      </Heading>
      <TableUser users={members} /> 
      </div>
  );
}
