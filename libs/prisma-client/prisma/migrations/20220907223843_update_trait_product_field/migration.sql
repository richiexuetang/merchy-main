/*
  Warnings:

  - You are about to drop the column `productId` on the `Trait` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Trait" DROP CONSTRAINT "Trait_productId_fkey";

-- AlterTable
ALTER TABLE "Trait" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "_ProductToTrait" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToTrait_AB_unique" ON "_ProductToTrait"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToTrait_B_index" ON "_ProductToTrait"("B");

-- AddForeignKey
ALTER TABLE "_ProductToTrait" ADD CONSTRAINT "_ProductToTrait_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToTrait" ADD CONSTRAINT "_ProductToTrait_B_fkey" FOREIGN KEY ("B") REFERENCES "Trait"("id") ON DELETE CASCADE ON UPDATE CASCADE;
