import { NextResponse } from 'next/server';

const data = [
    {
        url: "/photos/01.jpg",
        position: [-1.1, 0, 0]
    },
    {
        url: "/photos/01.jpg",
        position: [0, 0.2, 0]
    },
    {
        url: "/photos/01.jpg",
        position: [1.1, 0, 0]
    },
    {
        url: "/photos/01.jpg",
        position: [0, -1.15, 0]
    },

];

export async function GET(request: Request) {
    return NextResponse.json({ data });
}