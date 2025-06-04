import { NextResponse } from 'next/server';
import crypto from 'crypto';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

if (!process.env.PAYU_MERCHANT_KEY || !process.env.PAYU_MERCHANT_SALT) {
  throw new Error('Please add PayU credentials to .env.local');
}

const PAYU_BASE_URL = 'https://securegw.paytm.in/theia/processTransaction';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, whatsapp } = body;

    // Generate a unique transaction ID
    const txnid = `TXN_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    
    // Amount in INR (₹999)
    const amount = '999.00';
    
    // Product info
    const productinfo = 'Trading Masterclass Registration';
    
    // Generate hash for PayU
    const hashString = `${process.env.PAYU_MERCHANT_KEY}|${txnid}|${amount}|${productinfo}|${name}|${email}|||||||||||${process.env.PAYU_MERCHANT_SALT}`;
    const hash = crypto.createHash('sha512').update(hashString).digest('hex');

    // Prepare PayU form data
    const payuData = {
      key: process.env.PAYU_MERCHANT_KEY,
      txnid: txnid,
      amount: amount,
      productinfo: productinfo,
      firstname: name,
      email: email,
      phone: phone,
      surl: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      furl: `${process.env.NEXT_PUBLIC_BASE_URL}/failure`,
      hash: hash,
      // Additional fields
      udf1: whatsapp, // Store WhatsApp number in udf1
      udf2: 'masterclass', // Store registration type in udf2
    };

    return NextResponse.json({ 
      success: true, 
      payuData,
      payuUrl: PAYU_BASE_URL
    });
  } catch (error) {
    console.error('PayU error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create payment session' },
      { status: 500 }
    );
  }
} 