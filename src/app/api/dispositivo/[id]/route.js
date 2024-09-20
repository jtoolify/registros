// app/api/dispositivo/[id]/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(req, { params }) {
  const { id } = params;
  const { tipo, marca, modelo, numeroDeSerie, fechaAdquisicion, estado, ubicacion, notas } = await req.json();

  try {
    const dispositivo = await prisma.dispositivo.update({
      where: { id: Number(id) },
      data: {
        tipo,
        marca,
        modelo,
        numeroDeSerie,
        fechaAdquisicion,
        estado,
        ubicacion,
        notas,
      },
    });
    return new Response(JSON.stringify(dispositivo), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error updating dispositivo' }), { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await prisma.dispositivo.delete({
      where: { id: Number(id) },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error deleting dispositivo' }), { status: 500 });
  }
}
