import { APIResponse } from "@/utilities/ApiResponse";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const customerExist = await prisma.customer.findMany();
  return NextResponse.json(customerExist);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("Testing", body);

  const customerExist = await prisma.customer.findFirst({
    where: {
      email: body.email,
    },
  });

  if (customerExist) {
    console.log("Customer Exist", customerExist);
    return APIResponse.validationError({ "User": "User already exists" });
  }

  const accountNumber = Math.floor(
    1000000000 + Math.random() * 9000000000
  ).toString();
  console.log("Checking data", body);
  
  const newcustomer = await prisma.customer.create({
    data: {
      ...body,
      accountNumber: accountNumber,
    },
  });

  return new Response(JSON.stringify({ ...newcustomer, _id: newcustomer.id }));
}
