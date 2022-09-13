-- CreateTable
CREATE TABLE "Trait" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Trait_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Trait_productId_key" ON "Trait"("productId");

-- AddForeignKey
ALTER TABLE "Trait" ADD CONSTRAINT "Trait_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
