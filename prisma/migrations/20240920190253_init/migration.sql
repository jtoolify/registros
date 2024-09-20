-- CreateTable
CREATE TABLE "Dispositivo" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT,
    "marca" TEXT,
    "modelo" TEXT,
    "numeroDeSerie" TEXT,
    "fechaAdquisicion" TIMESTAMP(3),
    "estado" TEXT,
    "ubicacion" TEXT,
    "notas" TEXT,

    CONSTRAINT "Dispositivo_pkey" PRIMARY KEY ("id")
);
