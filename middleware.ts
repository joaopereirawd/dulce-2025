import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const userAgent = req.headers.get('user-agent') || '';

    // Detecta se o dispositivo é móvel
    const isMobile = /Mobile|Android|iP(hone|od|ad)|IEMobile|Opera Mini|BlackBerry/i.test(userAgent);

    // Modifica o cabeçalho para incluir a informação sobre o dispositivo
    const res = NextResponse.next();
    res.headers.set('X-Is-Mobile', isMobile ? '1' : '0');

    return res;
}