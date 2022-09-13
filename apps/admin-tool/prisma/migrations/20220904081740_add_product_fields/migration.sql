/*
  Warnings:

  - A unique constraint covering the columns `[urlKey]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "description" VARCHAR(50) NOT NULL DEFAULT 'default description',
ADD COLUMN     "urlKey" VARCHAR(50) NOT NULL DEFAULT 'default urlKey';

-- CreateTable
CREATE TABLE "BreadCrumb" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "level" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "BreadCrumb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_urlKey_key" ON "Product"("urlKey");
