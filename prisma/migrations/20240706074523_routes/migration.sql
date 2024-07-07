-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_routeId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "routeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route"("id") ON DELETE SET NULL ON UPDATE CASCADE;
