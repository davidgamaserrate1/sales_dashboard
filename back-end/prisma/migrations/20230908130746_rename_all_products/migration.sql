/*
  Warnings:

  - You are about to drop the `AllProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AllProducts";

-- CreateTable
CREATE TABLE "SelectAllProducts" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "SelectAllProducts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SelectAllProducts_name_key" ON "SelectAllProducts"("name");
