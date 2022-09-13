/*
  Warnings:

  - The primary key for the `BreadCrumb` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `BreadCrumb` table. All the data in the column will be lost.
  - You are about to drop the column `breadCrumbs` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `products` on the `Category` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[categoryId]` on the table `BreadCrumb` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `BreadCrumb` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Trait` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Trait` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BreadCrumb" DROP CONSTRAINT "BreadCrumb_pkey",
DROP COLUMN "id",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD CONSTRAINT "BreadCrumb_pkey" PRIMARY KEY ("productKey", "categoryId");

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "breadCrumbs",
DROP COLUMN "products";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "listingType" TEXT NOT NULL DEFAULT 'Standard',
ADD COLUMN     "primaryCategory" TEXT;

-- AlterTable
ALTER TABLE "Trait" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CategoriesOnProduct" (
    "categoryId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL DEFAULT 'Category',

    CONSTRAINT "CategoriesOnProduct_pkey" PRIMARY KEY ("categoryId","productId")
);

-- CreateTable
CREATE TABLE "Market" (
    "id" TEXT NOT NULL,
    "highestBid" INTEGER,
    "highestBidTime" TIMESTAMP(3),
    "lowestBid" INTEGER,
    "lowestAsk" INTEGER,
    "lowestAskTime" TIMESTAMP(3),
    "numberofAsks" INTEGER,
    "numberofBids" INTEGER,
    "annualHigh" INTEGER,
    "annualLow" INTEGER,
    "lastSale" INTEGER,
    "lastSaleDate" TIMESTAMP(3),
    "pricePremium" INTEGER,
    "salesEver" INTEGER,
    "changePercentage" INTEGER,
    "volatility" DOUBLE PRECISION,
    "price" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Market_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoriesOnProduct_categoryId_key" ON "CategoriesOnProduct"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "CategoriesOnProduct_productId_key" ON "CategoriesOnProduct"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Market_productId_key" ON "Market"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "BreadCrumb_categoryId_key" ON "BreadCrumb"("categoryId");

-- AddForeignKey
ALTER TABLE "CategoriesOnProduct" ADD CONSTRAINT "CategoriesOnProduct_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnProduct" ADD CONSTRAINT "CategoriesOnProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Market" ADD CONSTRAINT "Market_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BreadCrumb" ADD CONSTRAINT "BreadCrumb_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
