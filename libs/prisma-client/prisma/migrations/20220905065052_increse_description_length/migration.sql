-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "model" TEXT DEFAULT 'Unknown',
ALTER COLUMN "description" SET DATA TYPE VARCHAR(255);
