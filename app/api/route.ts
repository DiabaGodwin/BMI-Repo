// pages/api/hello.ts
import clientPromise from '../../lib/mongo';
import { NextResponse } from 'next/server';

// export async function GET(

// ) {
//   try {
//     console.log("clientPromise")
//     const client = await clientPromise;
//     const db = client.db('BMI_INVESTMENT');
//     const collection = db.collection('Users');
    
//     const data = await collection.find({}).toArray();

//     NextResponse.json(data);
//   } catch (e) {
//     NextResponse.json({ error: 'Failed to connect to database' });
//   }
// }
export async function POST(){
    const data = { message: "Hello, world!" };
    return NextResponse.json(data);
}
