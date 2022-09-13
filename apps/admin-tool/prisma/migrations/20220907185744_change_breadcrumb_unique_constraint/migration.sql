/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `BreadCrumb` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "BreadCrumb_categoryId_key";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "description" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "BreadCrumb_url_key" ON "BreadCrumb"("url");
