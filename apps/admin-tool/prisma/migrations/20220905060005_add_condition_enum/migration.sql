/*
  Warnings:

  - The primary key for the `BreadCrumb` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `BreadCrumb` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `productKey` to the `BreadCrumb` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryTitle` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondaryTitle` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('NEW', 'USED');

-- AlterTable
ALTER TABLE "BreadCrumb" DROP CONSTRAINT "BreadCrumb_pkey",
ADD COLUMN     "productKey" VARCHAR(255) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "BreadCrumb_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
ADD COLUMN     "condition" "Condition" NOT NULL DEFAULT 'NEW',
ADD COLUMN     "primaryTitle" VARCHAR(50) NOT NULL,
ADD COLUMN     "relatedProducts" TEXT[],
ADD COLUMN     "secondaryTitle" VARCHAR(50) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "price" DROP DEFAULT,
ALTER COLUMN "description" DROP DEFAULT,
ALTER COLUMN "urlKey" DROP DEFAULT,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Product_id_seq";

-- AddForeignKey
ALTER TABLE "BreadCrumb" ADD CONSTRAINT "BreadCrumb_productKey_fkey" FOREIGN KEY ("productKey") REFERENCES "Product"("urlKey") ON DELETE RESTRICT ON UPDATE CASCADE;
