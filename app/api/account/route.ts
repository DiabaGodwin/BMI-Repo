import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/mongo/index";

export async function GET() {
  const data = { message: "Hello, world!" };
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  console.log(req)
  const body = await req.json();
  const userExist = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });
  if (userExist) {
    return Response.json("Email already exists");
  }
  const accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();

  const newUser = await prisma.user.create({
    data: {
      firstname: body.firstname,
      lastname: body.lastname,
      middlename: body.middlename,
      phone: body.phone,
      email: body.email,
      address: body.address,
      dateOfBirth: body.dateOfBirth,
      accountBalance:body.accountBalance,
      accountNumber :accountNumber,
      userIdNumber: body.userIdNumber,
      userIdType:body.userIdType,
      identificationCard: body.identificationCard,
      nextOfKinFirstName: body.nextOfKin.firstName,
      nextOfKinLastName: body.nextOfKin.lastName,
      nextOfKinPhone: body.nextOfKin.phone,
      nextOfKinEmail: body.nextOfKin.email,
      nextOfKinIdType: body.nextOfKinIdType,
      nextOfKinIdNumber:body.nextOfKinIdNumber,
      userIdDocuments: body.nextOfKin.userIdDocuments,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
console.log(newUser)
  return new Response(JSON.stringify({ ...newUser, _id: newUser.id }));
}
