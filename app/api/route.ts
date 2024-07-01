import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../lib/mongo';
import { APIResponse } from '@/utilities/ApiResponse';

// getting all users
export async function GET(req: NextRequest) {
  try {
    const data = await prisma.user.findMany();
    return APIResponse.success(data);
  } catch (e) {
    return APIResponse.serverError();
  }
}

// creating a new user
export async function POST(req: NextRequest) {
  const data = { message: "Hello, world!" };
  return new NextResponse(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
