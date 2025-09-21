-- CreateTable
CREATE TABLE "public"."Despesa" (
    "id" SERIAL NOT NULL,
    "ano" INTEGER NOT NULL,
    "mes" INTEGER NOT NULL,
    "tipoDespesa" TEXT NOT NULL,
    "valorDocumento" DOUBLE PRECISION NOT NULL,
    "deputadoId" INTEGER NOT NULL,

    CONSTRAINT "Despesa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Despesa" ADD CONSTRAINT "Despesa_deputadoId_fkey" FOREIGN KEY ("deputadoId") REFERENCES "public"."Deputado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
