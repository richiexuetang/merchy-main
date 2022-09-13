/*
  Warnings:

  - You are about to drop the column `categoryId` on the `BreadCrumb` table. All the data in the column will be lost.
  - The required column `id` was added to the `BreadCrumb` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "BreadCrumb" DROP CONSTRAINT "BreadCrumb_categoryId_fkey";

-- AlterTable
ALTER TABLE "BreadCrumb" DROP COLUMN "categoryId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "BreadCrumb_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "_BreadCrumbToCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BreadCrumbToCategory_AB_unique" ON "_BreadCrumbToCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_BreadCrumbToCategory_B_index" ON "_BreadCrumbToCategory"("B");

-- AddForeignKey
ALTER TABLE "_BreadCrumbToCategory" ADD CONSTRAINT "_BreadCrumbToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "BreadCrumb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BreadCrumbToCategory" ADD CONSTRAINT "_BreadCrumbToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
