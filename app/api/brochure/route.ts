import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const MONGODB_URI = process.env.MONGODB_URI;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db('tradepro');
    
    const result = await db.collection('brochures').insertOne({
      ...body,
      createdAt: new Date()
    });

    await client.close();

    return NextResponse.json({ 
      success: true, 
      id: result.insertedId 
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save data' },
      { status: 500 }
    );
  }
}