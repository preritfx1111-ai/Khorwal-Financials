"use client"

import { useEffect, useState, useRef } from "react"
import { TrendingDown, TrendingUp, RefreshCw } from "lucide-react"

interface StockQuote {
  symbol: string
  name: string
  price: number
  change: number
  changePercent: number
}

// Format price in Indian number format
function formatPrice(price: number): string {
  return price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function formatChange(change: number): string {
  const sign = change >= 0 ? "+" : ""
  return `${sign}${change.toFixed(2)}`
}

function formatPercent(pct: number): string {
  const sign = pct >= 0 ? "+" : ""
  return `${sign}${pct.toFixed(2)}%`
}

export default function StockMarketTicker() {
  const [stocks, setStocks] = useState<StockQuote[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchStocks = async () => {
    try {
      const res = await fetch("/api/stocks", { cache: "no-store" })
      const json = await res.json()
      if (json.data && json.data.length > 0) {
        setStocks(json.data)
        setLastUpdated(new Date())
      }
    } catch {
      // silently fail — fallback data is served by the API
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStocks()
    // Refresh every 60 seconds
    const interval = setInterval(fetchStocks, 60_000)
    return () => clearInterval(interval)
  }, [])

  // Triplicate for seamless infinite scroll
  const displayStocks = [...stocks, ...stocks, ...stocks]

  return (
    <div className="w-full bg-slate-900/80 backdrop-blur-md border-t border-b border-slate-700/60 overflow-hidden">
      {/* Top metadata bar */}
      <div className="flex items-center justify-between px-4 py-1 border-b border-slate-700/40 bg-slate-900/60">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-widest">NSE Live</span>
        </div>
        <div className="flex items-center space-x-3">
          {lastUpdated && (
            <span className="text-[10px] text-slate-500">
              Updated {lastUpdated.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
            </span>
          )}
          <button
            onClick={fetchStocks}
            className="text-slate-500 hover:text-emerald-400 transition-colors"
            title="Refresh"
          >
            <RefreshCw size={10} className={loading ? "animate-spin" : ""} />
          </button>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="relative py-2.5 overflow-hidden">
        {/* Left/right fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-slate-900/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-slate-900/80 to-transparent pointer-events-none" />

        {loading ? (
          /* Skeleton loader */
          <div className="flex items-center space-x-6 px-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-2 flex-shrink-0 animate-pulse">
                <div className="w-24 h-3 bg-slate-700 rounded" />
                <div className="w-16 h-3 bg-slate-700 rounded" />
                <div className="w-12 h-3 bg-slate-700 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="flex items-center ticker-scroll"
            style={{ animationDuration: `${Math.max(6, displayStocks.length * 1)}s` }}
          >
            {displayStocks.map((stock, index) => {
              const isUp = stock.change >= 0
              return (
                <div
                  key={`${stock.symbol}-${index}`}
                  className="flex items-center space-x-2 whitespace-nowrap flex-shrink-0 px-4 border-r border-slate-700/50 last:border-r-0"
                >
                  {isUp ? (
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                  )}
                  <span className="text-slate-300 font-medium text-xs">{stock.name}</span>
                  <span className="text-white font-bold text-xs tabular-nums">₹{formatPrice(stock.price)}</span>
                  <span className={`text-xs font-semibold tabular-nums ${isUp ? "text-emerald-400" : "text-red-400"}`}>
                    {formatChange(stock.change)}
                  </span>
                  <span className={`text-xs tabular-nums ${isUp ? "text-emerald-400/80" : "text-red-400/80"}`}>
                    ({formatPercent(stock.changePercent)})
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Keyframe animation */}
      <style>{`
        .ticker-scroll {
          animation: ticker-move linear infinite;
        }
        @keyframes ticker-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .ticker-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
