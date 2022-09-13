/*
  Warnings:

  - You are about to drop the column `productId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_productId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "_Variants" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Variants_AB_unique" ON "_Variants"("A", "B");

-- CreateIndex
CREATE INDEX "_Variants_B_index" ON "_Variants"("B");

-- AddForeignKey
ALTER TABLE "_Variants" ADD CONSTRAINT "_Variants_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Variants" ADD CONSTRAINT "_Variants_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
