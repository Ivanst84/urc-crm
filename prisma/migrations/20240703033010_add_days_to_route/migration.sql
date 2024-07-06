/*
  Warnings:

  - Added the required column `day` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Route" ADD COLUMN     "day" TEXT NOT NULL;
