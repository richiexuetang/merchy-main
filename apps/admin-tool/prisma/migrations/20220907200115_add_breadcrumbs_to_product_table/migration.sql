-- CreateTable
CREATE TABLE "_BreadCrumbToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BreadCrumbToProduct_AB_unique" ON "_BreadCrumbToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_BreadCrumbToProduct_B_index" ON "_BreadCrumbToProduct"("B");

-- AddForeignKey
ALTER TABLE "_BreadCrumbToProduct" ADD CONSTRAINT "_BreadCrumbToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "BreadCrumb"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BreadCrumbToProduct" ADD CONSTRAINT "_BreadCrumbToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
