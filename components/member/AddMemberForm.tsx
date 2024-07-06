'use client'

import { z } from "zod"

export const MemberSchema = z.object({

     name: z.string()
        .trim()
        .min(1,{message: El  campo nombre no puede estar vacio}),

      gender: z.string()
        .trim()  

})