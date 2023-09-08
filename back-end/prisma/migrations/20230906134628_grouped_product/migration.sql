-- CreateTable
CREATE TABLE "GroupedProduct" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "value" INTEGER NOT NULL,

    CONSTRAINT "GroupedProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GroupedProductToSimpleProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "GroupedProduct_name_key" ON "GroupedProduct"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_GroupedProductToSimpleProduct_AB_unique" ON "_GroupedProductToSimpleProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_GroupedProductToSimpleProduct_B_index" ON "_GroupedProductToSimpleProduct"("B");

-- AddForeignKey
ALTER TABLE "_GroupedProductToSimpleProduct" ADD CONSTRAINT "_GroupedProductToSimpleProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "GroupedProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GroupedProductToSimpleProduct" ADD CONSTRAINT "_GroupedProductToSimpleProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "SimpleProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;
