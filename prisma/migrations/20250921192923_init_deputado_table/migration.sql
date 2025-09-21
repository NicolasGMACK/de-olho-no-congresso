/*
  Warnings:

  - The primary key for the `Deputado` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `aid` on the `Deputado` table. All the data in the column will be lost.
  - Added the required column `id` to the `Deputado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Deputado" DROP CONSTRAINT "Deputado_pkey",
DROP COLUMN "aid",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "Deputado_pkey" PRIMARY KEY ("id");
