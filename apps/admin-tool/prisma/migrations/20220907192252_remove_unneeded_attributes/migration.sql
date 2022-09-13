/*
  Warnings:

  - You are about to drop the column `childId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "childId",
DROP COLUMN "parentId";
