import { NextResponse } from 'next/server';

// Mock payment route for development
export async function POST(req: Request) {
  try {
    // Return a mock session ID
    return NextResponse.json({ 
      sessionId: 'mock_session_id',
      message: 'Payment integration is currently disabled. This is a mock response.'
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
  }
}