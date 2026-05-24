import { NextResponse } from "next/server"

// Indian stock symbols for Yahoo Finance (NSE)
const SYMBOLS = [
  "RELIANCE.NS",
  "ITC.NS",
  "HDFCBANK.NS",
  "SBIN.NS",
  "INFY.NS",
  "TCS.NS",
  "BHARTIARTL.NS",
  "ASIANPAINT.NS",
  "WIPRO.NS",
  "AXISBANK.NS",
  "KOTAKBANK.NS",
  "ICICIBANK.NS",
  "MARUTI.NS",
  "BAJFINANCE.NS",
  "NESTLEIND.NS",
]

const DISPLAY_NAMES: Record<string, string> = {
  "RELIANCE.NS": "Reliance Industries",
  "ITC.NS": "ITC",
  "HDFCBANK.NS": "HDFC Bank",
  "SBIN.NS": "SBI",
  "INFY.NS": "Infosys",
  "TCS.NS": "TCS",
  "BHARTIARTL.NS": "Bharti Airtel",
  "ASIANPAINT.NS": "Asian Paints",
  "WIPRO.NS": "Wipro",
  "AXISBANK.NS": "Axis Bank",
  "KOTAKBANK.NS": "Kotak Mahindra",
  "ICICIBANK.NS": "ICICI Bank",
  "MARUTI.NS": "Maruti Suzuki",
  "BAJFINANCE.NS": "Bajaj Finance",
  "NESTLEIND.NS": "Nestlé India",
}

export interface StockQuote {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
}

// Cache to avoid hammering the API on every request
let cache: { data: StockQuote[]; ts: number } | null = null
const CACHE_TTL_MS = 60_000 // 1 minute

export async function GET() {
  try {
    // Serve from cache if fresh
    if (cache && Date.now() - cache.ts < CACHE_TTL_MS) {
      return NextResponse.json({ success: true, data: cache.data })
    }

    const symbolsParam = SYMBOLS.join(",")
    const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbolsParam}&fields=regularMarketPrice,regularMarketChange,regularMarketChangePercent,shortName`

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
      next: { revalidate: 60 }, // Next.js ISR cache
    })

    if (!response.ok) {
      throw new Error(`Yahoo Finance API error: ${response.status}`)
    }

    const json = await response.json()
    const result = json?.quoteResponse?.result

    if (!result || !Array.isArray(result)) {
      throw new Error("Invalid response structure from Yahoo Finance")
    }

    const data: StockQuote[] = result.map((q: any) => ({
      symbol: q.symbol,
      name: DISPLAY_NAMES[q.symbol] || q.shortName || q.symbol.replace(".NS", ""),
      price: q.regularMarketPrice ?? 0,
      change: q.regularMarketChange ?? 0,
      changePercent: q.regularMarketChangePercent ?? 0,
    }))

    // Update cache
    cache = { data, ts: Date.now() }

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error("Stock API error:", error.message)
    // Return fallback static data so the ticker never breaks
    return NextResponse.json({
      success: false,
      data: getFallbackData(),
      message: "Using cached data",
    })
  }
}

function getFallbackData(): StockQuote[] {
  return [
    { symbol: "RELIANCE.NS", name: "Reliance Industries", price: 1488.45, change: -15.6, changePercent: -1.04 },
    { symbol: "ITC.NS", name: "ITC", price: 418.7, change: -2.9, changePercent: -0.69 },
    { symbol: "HDFCBANK.NS", name: "HDFC Bank", price: 2729.95, change: -17.05, changePercent: -0.62 },
    { symbol: "SBIN.NS", name: "SBI", price: 825.3, change: 8.45, changePercent: 1.03 },
    { symbol: "INFY.NS", name: "Infosys", price: 1456.8, change: 12.3, changePercent: 0.85 },
    { symbol: "TCS.NS", name: "TCS", price: 3842.6, change: -22.15, changePercent: -0.57 },
    { symbol: "BHARTIARTL.NS", name: "Bharti Airtel", price: 1245.9, change: 18.7, changePercent: 1.52 },
    { symbol: "ASIANPAINT.NS", name: "Asian Paints", price: 2987.25, change: -45.3, changePercent: -1.49 },
    { symbol: "WIPRO.NS", name: "Wipro", price: 458.2, change: 3.15, changePercent: 0.69 },
    { symbol: "AXISBANK.NS", name: "Axis Bank", price: 1142.5, change: -8.75, changePercent: -0.76 },
  ]
}
