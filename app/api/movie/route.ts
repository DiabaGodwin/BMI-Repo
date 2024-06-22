import clientPromise from "@/lib/mongo";
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/lib/mongo";

///
export  async  function GET(req: Request){
    try {
        const body = await req.json()
        const movies = prisma.user.findFirst({
            // where:{
            //     email='body'
            // },
        })

        return JSON.stringify({result:movies})
    } catch (e) {
        console.error(e);
    }
}

