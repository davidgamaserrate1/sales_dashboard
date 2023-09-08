-- DropForeignKey
ALTER TABLE "GroupedProduct" DROP CONSTRAINT "GroupedProduct_simpleProductId_fkey";

-- DropIndex
DROP INDEX "GroupedProduct_name_key";

-- AlterTable
ALTER TABLE "GroupedProduct" ADD COLUMN     "groupId" INTEGER,
ALTER COLUMN "simpleProductId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GroupedProduct" ADD CONSTRAINT "GroupedProduct_simpleProductId_fkey" FOREIGN KEY ("simpleProductId") REFERENCES "SimpleProduct"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupedProduct" ADD CONSTRAINT "GroupedProduct_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
