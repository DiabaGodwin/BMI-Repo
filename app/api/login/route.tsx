import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/mongo/index";

//login route

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);
    var user = await prisma.user.findFirst({
        where:{
            email:body.email,
        }
    });
   
    if(user){
        return NextResponse.json({message:"User already exists"});
    }
    
}

