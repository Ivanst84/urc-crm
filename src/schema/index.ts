import { z } from "zod"

export const MemberSchema = z.object({

     name: z.string()
        .trim()
        .min(1,{message: "El  campo nombre no puede estar vacio"}),


      gender: z.string()
        .trim()  
        .min(1,{message: "El  campo  no debe estar vacio"}),

        age: z.number()
           .min(1,"la edad es requerida"),

        email: z.string()
            .email({message: "El email no es valido"}),

      phone: z.string()
        .min(10,{message: "El  campo telefono no puede estar vacio"}),
      
        route: z.string()
    .nullable() // Permite que el campo sea null
    .optional() // Permite que el campo no esté presente
    .default(null) // Valor predeterminado null para el campo route

})
export const SearchSchema = z.object({
    search: z.string()
        .trim()
        .min(1,{message: "El  campo de busqueda no puede estar vacio"})
})