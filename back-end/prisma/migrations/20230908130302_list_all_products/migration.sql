-- CreateTable
CREATE TABLE "AllProducts" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "AllProducts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AllProducts_name_key" ON "AllProducts"("name");
