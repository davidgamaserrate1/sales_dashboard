/*
  Warnings:

  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GroupedProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GroupedProduct" DROP CONSTRAINT "GroupedProduct_groupId_fkey";

-- DropForeignKey
ALTER TABLE "GroupedProduct" DROP CONSTRAINT "GroupedProduct_simpleProductId_fkey";

-- DropTable
DROP TABLE "Group";

-- DropTable
DROP TABLE "GroupedProduct";
