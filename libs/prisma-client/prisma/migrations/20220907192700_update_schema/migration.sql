/*
  Warnings:

  - You are about to drop the column `chapterId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `productCount` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_chapterId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "chapterId",
DROP COLUMN "position",
DROP COLUMN "productCount",
ADD COLUMN     "categoryId" TEXT;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
