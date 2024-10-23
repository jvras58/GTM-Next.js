import { NextResponse } from 'next/server';

// router: /api/data
export async function POST(req) {
try {
const data = await req.json();
console.log('Dados recebidos do GTM:', data);

return NextResponse.json({ message: 'Dados recebidos com sucesso' }, { status: 200 });
} catch (error) {
console.error('Erro ao processar a requisição:', error);
return NextResponse.json({ error: 'Ocorreu um erro interno do servidor.' }, { status: 500 });
}
}

export async function GET() {
return NextResponse.json({ message: 'Método HTTP não permitido' }, { status: 405 });
}
