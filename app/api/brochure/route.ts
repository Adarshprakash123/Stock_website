import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const client = await MongoClient.connect(process.env.MONGODB_URI as string);
    const db = client.db('tradepro');
    
    const result = await db.collection('brochures').insertOne({
      ...body,
      createdAt: new Date()
    });

    await client.close();

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: 'Failed to save data' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500
    });
  }
}