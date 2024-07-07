// /lib/api.js

import { prisma } from '@/src/lib/prisma';
export async function getMembersAction() {
  const members = await prisma.user.findMany();
  return members.map(member => ({
    ...member,
    phone: member.phone || null, // Asegurar que phone sea string | null
  }));
}