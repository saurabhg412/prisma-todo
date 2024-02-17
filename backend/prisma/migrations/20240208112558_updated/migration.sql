/*
  Warnings:

  - You are about to drop the column `user_id` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_user_id_fkey";

-- DropIndex
DROP INDEX "Todo_user_id_key";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "user_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Todo_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "User";
