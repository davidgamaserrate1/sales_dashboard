/*
  Warnings:

  - Added the required column `simpleProductId` to the `GroupedProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GroupedProduct" ADD COLUMN     "simpleProductId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "GroupedProduct" ADD CONSTRAINT "GroupedProduct_simpleProductId_fkey" FOREIGN KEY ("simpleProductId") REFERENCES "SimpleProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
