-- CreateTable
CREATE TABLE "ConfigurableProduct" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "value" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "ConfigurableProduct_pkey" PRIMARY KEY ("id")
);
