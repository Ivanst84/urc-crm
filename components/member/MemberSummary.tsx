import TableUser from '../ui/TableUser';
import Heading from '../ui/Heading';
import { getMembersAction } from '@/action/get-members-action';
import ViewMembers from './ViewMembers';

export default async function MemberSummary() {

  return (
    <aside className="flex flex-col justify-center items-center md:w-1/2 md:h-screen bg-white">
      <div className="w-full max-w-md mx-auto ml-[-180px] -mt-52">
        <Heading>
          Lista de Miembros
        </Heading>
        <ViewMembers />

      </div>
    </aside>
  );
}
