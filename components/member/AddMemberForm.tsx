'use client'
import { createMemberAction } from "@/action/create-member-action"
import { MemberSchema } from "@/src/schema"
import {useRouter} from "next/navigation"
import { toast } from "react-toastify"

export default function AddMemberForm  ({children}: {children: React.ReactNode}) {
    const router = useRouter()
    const handleSubmit = async (formData: FormData) => {
        console.log("entrando al submit")
        console.log(formData.get('name'))
        const data = {

                name:formData.get('name'),
                gender:formData.get('gender'),
                age: Number(formData.get('age')), // Convertir a número usando Number()                email:formData.get('email'),
                phone:formData.get('phone'),
                email:formData.get('email'),


        }
        console.log(data)
        const result = MemberSchema.safeParse(data)
        if(!result.success){
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            }
            )
            console.log("el resultado",result)
            return
        }
        const response = await createMemberAction(result.data)
        if(response?.errors){
            response.errors.forEach(error => {
                toast.error(error.message)
            })
            return
        }
    
        toast.success("Miembro creado")
        router.push("/members")
    }

    return (
        <div className="bg-white rounded-md shadow-md p-4">
          <form action={handleSubmit}> 
                      {children} {/* Renderizamos los children (los campos del formulario) dentro del form */}
            <input type="submit" value="Guardar Miembro" className="bg-slate-800 text-white p-2 rounded-md cursor-pointer" />
          </form>
        </div>
      );
    };
