import { NextResponse } from 'next/server';

export async function GET() {
  const backendUrl = process.env.BACKEND_API_URL ?? 'http://localhost:8080/api/resources';
  const response = await fetch(backendUrl);
  const resources = await response.json();
  return NextResponse.json(resources);
}
