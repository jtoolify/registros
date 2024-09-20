// app/api/clientes/[id]/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(req, { params }) {
  const { id } = params; // Obtener el ID del cliente desde los parámetros
  const { name, email } = await req.json(); // Extraer los datos del cuerpo de la solicitud

  try {
    // Intentar actualizar el cliente en la base de datos
    const cliente = await prisma.cliente.update({
      where: { id: Number(id) }, // Asegurarse de que el ID sea un número
      data: { name, email }, // Datos a actualizar
    });
    return new Response(JSON.stringify(cliente), { status: 200 }); // Devolver el cliente actualizado
  } catch (error) {
    console.error('Error updating cliente:', error); // Registrar el error para depuración
    return new Response(JSON.stringify({ error: 'Error updating cliente' }), { status: 500 }); // Devolver un mensaje de error
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await prisma.cliente.delete({
      where: { id: Number(id) },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error deleting cliente' }), { status: 500 });
  }
}
