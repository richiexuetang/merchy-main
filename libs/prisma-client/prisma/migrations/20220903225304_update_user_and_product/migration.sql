/*
  Warnings:

  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `brand` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brand" VARCHAR(50) NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phoneNumber" VARCHAR(50),
ADD COLUMN     "purchaseHistory" INTEGER[],
ADD COLUMN     "recentlyViewed" INTEGER[],
ADD COLUMN     "username" TEXT,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(50);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
