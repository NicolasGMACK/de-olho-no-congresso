-- CreateTable
CREATE TABLE "public"."Deputado" (
    "aid" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "siglaPartido" TEXT NOT NULL,
    "sigaUf" TEXT NOT NULL,
    "urlFoto" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "Deputado_pkey" PRIMARY KEY ("aid")
);
