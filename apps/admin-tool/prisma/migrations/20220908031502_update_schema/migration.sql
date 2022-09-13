/*
  Warnings:

  - You are about to drop the column `category` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `CategoriesOnProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CategoryConnection` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productCategory` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnProduct" DROP CONSTRAINT "CategoriesOnProduct_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnProduct" DROP CONSTRAINT "CategoriesOnProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryConnection" DROP CONSTRAINT "CategoryConnection_childId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryConnection" DROP CONSTRAINT "CategoryConnection_parentId_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "parentId" TEXT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "category",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "productCategory" TEXT NOT NULL;

-- DropTable
DROP TABLE "CategoriesOnProduct";

-- DropTable
DROP TABLE "CategoryConnection";

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
