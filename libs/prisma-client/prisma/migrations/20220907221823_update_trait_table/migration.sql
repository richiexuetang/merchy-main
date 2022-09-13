-- DropIndex
DROP INDEX "Trait_productId_key";

-- AlterTable
ALTER TABLE "Trait" ADD COLUMN     "visible" BOOLEAN NOT NULL DEFAULT false;
