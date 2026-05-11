import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, preferredDate, preferredTime, practiceArea, message } = body;

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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!preferredDate || typeof preferredDate !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Preferred date is required.' },
        { status: 400 }
      );
    }

    if (!preferredTime || typeof preferredTime !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Preferred time is required.' },
        { status: 400 }
      );
    }

    if (!practiceArea || typeof practiceArea !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Practice area is required.' },
        { status: 400 }
      );
    }

    // Validate date is in the future
    const selectedDate = new Date(preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      return NextResponse.json(
        { success: false, error: 'Please select a future date for your appointment.' },
        { status: 400 }
      );
    }

    // Validate preferred time
    const validTimes = ['morning', 'afternoon', 'evening'];
    if (!validTimes.includes(preferredTime)) {
      return NextResponse.json(
        { success: false, error: 'Please select a valid time slot.' },
        { status: 400 }
      );
    }

    // In production, this would save to a database and/or send email notifications
    // For now, we just validate and return success
    const timeLabels: Record<string, string> = {
      morning: 'Morning (9:00 AM - 12:00 PM)',
      afternoon: 'Afternoon (1:00 PM - 5:00 PM)',
      evening: 'Evening (5:00 PM - 7:00 PM)',
    };

    return NextResponse.json({
      success: true,
      message: `Your appointment has been requested for ${preferredDate} during the ${timeLabels[preferredTime]} slot. We will confirm your appointment via email at ${email}.`,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request. Please check your form data.' },
      { status: 400 }
    );
  }
}
