import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const MONGODB_URI = process.env.MONGODB_URI;

export async function POST(req: Request) {
  let client;
  try {
    const body = await req.json();
    console.log('Received form submission:', { 
      ...body, 
      password: '[REDACTED]',
      environment: process.env.NODE_ENV,
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL
    });
    
    console.log('Attempting MongoDB connection...');
    client = await MongoClient.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
    
    const db = client.db('tradepro');
    
    // Determine which collection to use based on form type
    const collection = body.formType === 'popup' ? 'popup_submissions' : 'masterclass_registrations';
    console.log('Using collection:', collection);
    
    const result = await db.collection(collection).insertOne({
      ...body,
      createdAt: new Date(),
      environment: process.env.NODE_ENV,
      source: 'production'
    });
    console.log('Data inserted successfully:', result.insertedId);

    return NextResponse.json({ 
      success: true, 
      id: result.insertedId 
    });
  } catch (error) {
    console.error('Database error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      environment: process.env.NODE_ENV,
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL
    });
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to save data', 
        details: error instanceof Error ? error.message : 'Unknown error',
        environment: process.env.NODE_ENV
      },
      { status: 500 }
    );
  } finally {
    if (client) {
      try {
        await client.close();
        console.log('MongoDB connection closed');
      } catch (closeError) {
        console.error('Error closing MongoDB connection:', closeError);
      }
    }
  }
} 