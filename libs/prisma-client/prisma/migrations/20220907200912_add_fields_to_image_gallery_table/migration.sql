/*
  Warnings:

  - Added the required column `imageUrl` to the `ImageGallery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smallImageUrl` to the `ImageGallery` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbUrl` to the `ImageGallery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ImageGallery" ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "smallImageUrl" TEXT NOT NULL,
ADD COLUMN     "thumbUrl" TEXT NOT NULL;
