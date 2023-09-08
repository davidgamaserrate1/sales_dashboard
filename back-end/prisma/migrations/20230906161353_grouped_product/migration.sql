/*
  Warnings:

  - You are about to drop the `_GroupedProductToSimpleProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_GroupedProductToSimpleProduct" DROP CONSTRAINT "_GroupedProductToSimpleProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_GroupedProductToSimpleProduct" DROP CONSTRAINT "_GroupedProductToSimpleProduct_B_fkey";

-- DropTable
DROP TABLE "_GroupedProductToSimpleProduct";
