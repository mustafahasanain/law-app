import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, caseType, description, context } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Name is required.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Email is required.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!caseType || typeof caseType !== 'string' || caseType.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Case type is required.' },
        { status: 400 }
      );
    }

    // In production, you would send an email or store in a database here
    console.log('Case evaluation submission:', {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || '',
      caseType: caseType.trim(),
      description: description?.trim() || '',
      context: context || 'website',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your case evaluation request has been submitted. Our team will review your case and contact you shortly.',
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
