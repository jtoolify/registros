// app/api/dispositivo/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const dispositivos = await prisma.dispositivo.findMany();
    return new Response(JSON.stringify(dispositivos), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error retrieving dispositivos' }), { status: 500 });
  }
}


export async function POST(req) {
  const { tipo, marca, modelo, numeroDeSerie, fechaAdquisicion, estado, ubicacion, notas } = await req.json();

  try {
    const dispositivo = await prisma.dispositivo.create({
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
    return new Response(JSON.stringify(dispositivo), { status: 201 });
  } catch (error) {
    console.error('Error creando dispositivo:', error);
    return new Response(JSON.stringify({ error: 'Error creando dispositivo' }), { status: 500 });
  }
}

