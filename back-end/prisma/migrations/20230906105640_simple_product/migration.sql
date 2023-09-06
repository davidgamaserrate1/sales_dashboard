-- CreateTable
CREATE TABLE "DigitalProduct" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "value" INTEGER NOT NULL,
    "linkDownload" TEXT NOT NULL,

    CONSTRAINT "DigitalProduct_pkey" PRIMARY KEY ("id")
);
