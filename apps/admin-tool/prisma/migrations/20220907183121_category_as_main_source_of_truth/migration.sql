/*
  Warnings:

  - The primary key for the `BreadCrumb` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `productKey` on the `BreadCrumb` table. All the data in the column will be lost.
  - You are about to drop the `CategoriesOnProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BreadCrumb" DROP CONSTRAINT "BreadCrumb_productKey_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnProduct" DROP CONSTRAINT "CategoriesOnProduct_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnProduct" DROP CONSTRAINT "CategoriesOnProduct_productId_fkey";

-- AlterTable
ALTER TABLE "BreadCrumb" DROP CONSTRAINT "BreadCrumb_pkey",
DROP COLUMN "productKey";

-- DropTable
DROP TABLE "CategoriesOnProduct";
