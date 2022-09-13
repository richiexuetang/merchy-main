/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_categoryId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "categoryId";

-- CreateTable
CREATE TABLE "CategoryConnection" (
    "parentId" TEXT NOT NULL,
    "childId" TEXT NOT NULL,

    CONSTRAINT "CategoryConnection_pkey" PRIMARY KEY ("parentId","childId")
);

-- AddForeignKey
ALTER TABLE "CategoryConnection" ADD CONSTRAINT "CategoryConnection_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryConnection" ADD CONSTRAINT "CategoryConnection_childId_fkey" FOREIGN KEY ("childId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
