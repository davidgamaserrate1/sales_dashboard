-- CreateTable
CREATE TABLE "SimpleProduct" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "value" INTEGER NOT NULL,

    CONSTRAINT "SimpleProduct_pkey" PRIMARY KEY ("id")
);
