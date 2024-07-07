"use server"
import { prisma } from "@/src/lib/prisma";
import { MemberSchema } from "@/src/schema";

export async function createMemberAction(data: unknown) {
    const result = MemberSchema.safeParse(data);
    if (!result.success) {
        return { errors: result.error.issues };
    }
    
    const { route, ...userData } = result.data;

    try {
        await prisma.user.create({
            data: userData,
        });

        return { success: true };
    } catch (error) {
        console.error("Error al crear usuario:", error);
        return { errors: [{ message: "Error al crear usuario." }] };
    }
}