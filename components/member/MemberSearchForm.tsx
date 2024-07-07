"use client"
import { SearchSchema } from "@/src/schema"
import {toast} from "react-toastify"
import { useRouter } from "next/navigation"

export default function MemberSearchForm(){

    const router = useRouter()


    const hadleSearchForm =(formData:FormData)=>{
        const data = {

            search: formData.get("search") 

        }
    const result = SearchSchema.safeParse(data)
    if(!result.success){
        result.error.issues.forEach(issue => {
            toast.error(issue.message)
        }
        )
        return
    
    }
    router.push(`/admin/search?search=${result.data.search}`)
    }

    return (
        <form className = "flex items-center"
        action ={hadleSearchForm}>

            <input 
            type="text"
            name="search"
            placeholder="Buscar miembro"
            className="bg-indigo-600 p-2 uppercase text-white cursor-pointer rounded"
            />
            <input
            type="submit"
            className="bg-blue-500 text-white p-2 rounded ml-2"
            value ={"Buscar"}
            >
                
            </input>
        </form>
    )
}