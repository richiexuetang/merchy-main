-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "path" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "productCount" INTEGER NOT NULL,
    "urlKey" TEXT NOT NULL,
    "products" TEXT[],
    "breadCrumbs" TEXT[],

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
