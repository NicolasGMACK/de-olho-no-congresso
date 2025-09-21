/*
  Warnings:

  - You are about to drop the column `sigaUf` on the `Deputado` table. All the data in the column will be lost.
  - Added the required column `siglaUf` to the `Deputado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Deputado" DROP COLUMN "sigaUf",
ADD COLUMN     "siglaUf" TEXT NOT NULL;
