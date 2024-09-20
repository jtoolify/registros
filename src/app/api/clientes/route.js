  // app/api/clientes/route.js
  import { PrismaClient } from '@prisma/client';

  const prisma = new PrismaClient();

  export async function GET(req) {
    try {
      const clientes = await prisma.cliente.findMany();
      return new Response(JSON.stringify(clientes), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Error retrieving clientes' }), { status: 500 });
    }
  }

export async function POST(req) {
  const { name, email } = await req.json();

  try {
    const cliente = await prisma.cliente.create({
      data: {
        name,
        email,
      },
    });
    return new Response(JSON.stringify(cliente), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error creating cliente' }), { status: 500 });
  }
}
