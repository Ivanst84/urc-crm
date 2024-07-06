import {prisma} from '@/src/lib/prisma'
import TableUser from '../ui/TableUser'
import Heading from '../ui/Heading'
import Link from 'next/link'

async function getMembers(){
return await prisma.user.findMany()
}

export default async function MemberSummary() {
const members = await getMembers()
return (
  <aside className="flex flex-col justify-center items-center md:w-1/2 md:h-screen bg-white">         
        
        <div className="w-full max-w-md mx-auto ml-[-180px]  -mt-52">
        <Heading>    
            Lista de Miembros
          </Heading>
          <div>


          </div>
                <TableUser users={members} />
    </div>
  </aside>
);
}