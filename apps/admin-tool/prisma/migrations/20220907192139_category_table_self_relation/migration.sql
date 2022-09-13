-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "chapterId" TEXT;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
