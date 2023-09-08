/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `ConfigurableProduct` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `DigitalProduct` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `SimpleProduct` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ConfigurableProduct" ADD COLUMN     "name" TEXT;

-- AlterTable
ALTER TABLE "DigitalProduct" ADD COLUMN     "name" TEXT;

-- AlterTable
ALTER TABLE "SimpleProduct" ADD COLUMN     "name" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ConfigurableProduct_name_key" ON "ConfigurableProduct"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DigitalProduct_name_key" ON "DigitalProduct"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SimpleProduct_name_key" ON "SimpleProduct"("name");
