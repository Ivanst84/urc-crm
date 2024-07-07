import MemberSearchForm from "@/components/member/MemberSearchForm";
import TableUser from "@/components/ui/TableUser";
import Heading from "@/components/ui/Heading";
import {prisma} from "@/src/lib/prisma";

async function searchMember(searchTerm:string){
    const members = await prisma.user.findMany({
        where:{

            name:{
                contains:searchTerm,
                mode:"insensitive"
            }
        },
        
    });
    return members.map(member => ({
        ...member,
        phone: member.phone || null, // Asegurar que phone sea string | null
    }));
}

export default async function SearchPage({searchParams}:{searchParams:{search:string}}) {
const members = await searchMember(searchParams.search)
return (
    <>
      <div className="w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <Heading>
          Resultados de la búsqueda: {searchParams.search}
        </Heading>
        <div className="flex flex-col gap-4">
          <MemberSearchForm />
          {members.length ? (
            <div className="flex flex-col justify-center items-center mt-4">
              <TableUser users={members} />
            </div>
          ) : (
            <p className="text-center text-lg">
              No se encontraron resultados
            </p>
          )}
        </div>
      </div>
    </>
  );
}