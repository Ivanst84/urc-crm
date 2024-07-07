import TableUser from "@/components/ui/TableUser";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import {redirect} from "next/navigation"
import {prisma} from "@/src/lib/prisma";
import { getMembersAction } from "@/action/get-members-action";
import MemberSearchForm from "@/components/member/MemberSearchForm";

async function MemberCount() {
    const members = await prisma.user.count();
    return members;
}
async function getMember(){

  const members = await prisma.user.findMany();
  return members.map(member => ({
    ...member,
    phone: member.phone || null, // Asegurar que phone sea string | null
  }));
}
export type MemberWithcOrder = Awaited<ReturnType<typeof getMember>>;
export default async function MemberPage () {

  const members = await getMembersAction()
  return (
    <div className="flex flex-col justify-center items-center h-screen">

      <div className="w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">      <Heading>
        Lista de Miembros
      </Heading>
        <MemberSearchForm />
      <TableUser users={members} />
      <div className="mt-4">
      <Link href="/admin/new"
      className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
      >
      Crear Miembro
      </Link>
      </div>
      </div>
    </div>
  );
}