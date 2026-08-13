import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

/**
 * Monthly cron endpoint — revalidates the /compare/ ISR cache so the
 * Google Places API ratings are refreshed automatically.
 *
 * Vercel cron schedule: 0 0 1 * *  (midnight on the 1st of each month)
 *
 * Required env vars:
 *   CRON_SECRET          — set in Vercel dashboard, used to authorise cron calls
 *   GOOGLE_PLACES_API_KEY — Google Places API key (never commit to git)
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  revalidatePath('/compare/')

  return NextResponse.json({
    revalidated: true,
    path: '/compare/',
    timestamp: new Date().toISOString(),
  })
}
