import { prisma } from "@/src/lib/prisma"
import { User } from "@prisma/client"


type  MemberFormProps = {
    user?:User
}

export  default function MemberForm({user}:MemberFormProps) {


    return (
    <>
    <div className= "space-y-2">
            <label className= "text-slate-800"
             htmlFor="name">Nombre</label>
            <input 
            type="text"
             name="name" 
             id="name" 
             className="block w-full p-3 bg-slate-100 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-slate-200"
             placeholder="Nombre"
                defaultValue={user?.name}
             />
        
        </div>
        
        <div className= "space-y-2">
            <label className= "text-slate-800"
             htmlFor="gender">Genero</label>
            <input 
            type="text"
             name="gender" 
             id="gender" 
             className="block w-full p-3 bg-slate-100 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-slate-200"
             placeholder="Genero"
                defaultValue={user?.gender}
             />
        
        </div>

        <div className= "space-y-2">
            <label className= "text-slate-800"
             htmlFor="age">Edad</label>
            <input 
            type="number"
             name="age" 
             id="age" 
             className="block w-full p-3 bg-slate-100 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-slate-200"
             placeholder="Edad"
                defaultValue={user?.age}
             />
             </div>

                <div className= "space-y-2">
            <label className= "text-slate-800"
                htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                className="block w-full p-3 bg-slate-100 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-slate-200"
                placeholder="Email"
                defaultValue={user?.email}  
            />
        </div>

        <div className= "space-y-2">
            <label className= "text-slate-800"
                htmlFor="phone">Telefono</label>
            <input
                type="text"
                name="phone"
                id="phone"
                className="block w-full p-3 bg-slate-100 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-slate-200"
                placeholder="Telefono"
                defaultValue={user?.phone ?? ''}            />
        </div>
     
       
        </>   
    
    )
}