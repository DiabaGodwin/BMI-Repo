import { NextRequest } from "next/server";
import prisma from "@/lib/mongo/index";

//Creating your route
export async function Post(req: NextRequest) {
    const body = await req.json();
    console.log(body);
    var user = await prisma.user.findFirst({
        where: {
        email: body.email,
        },
    });
    const newUser = await prisma.user.create({
        data:{
           ...body
        }
    });

    const userAuth = await prisma.userAuth.create({
        data:{
           ...body
        }
    });
    
    if (user) {
        return Response.json({ message: "User already exists" });
    }
}