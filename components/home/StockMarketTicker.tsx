"use client"

import { motion } from "framer-motion"
import { TrendingDown, TrendingUp } from "lucide-react"

const stockData = [
  {
    name: "Reliance Industries Ltd",
    price: "1,488.45",
    change: "-15.60",
    changePercent: "-1.04%",
    direction: "down" as const,
  },
  {
    name: "ITC Limited",
    price: "418.70",
    change: "-2.90",
    changePercent: "-0.69%",
    direction: "down" as const,
  },
  {
    name: "HDFC Bank Limited",
    price: "2,729.95",
    change: "-17.05",
    changePercent: "-0.62%",
    direction: "down" as const,
  },
  {
    name: "State Bank of India",
    price: "825.30",
    change: "+8.45",
    changePercent: "+1.03%",
    direction: "up" as const,
  },
  {
    name: "Infosys Limited",
    price: "1,456.80",
    change: "+12.30",
    changePercent: "+0.85%",
    direction: "up" as const,
  },
  {
    name: "TCS Limited",
    price: "3,842.60",
    change: "-22.15",
    changePercent: "-0.57%",
    direction: "down" as const,
  },
  {
    name: "Bharti Airtel",
    price: "1,245.90",
    change: "+18.70",
    changePercent: "+1.52%",
    direction: "up" as const,
  },
  {
    name: "Asian Paints",
    price: "2,987.25",
    change: "-45.30",
    changePercent: "-1.49%",
    direction: "down" as const,
  },
]

export default function StockMarketTicker() {
  const duplicatedStocks = [...stockData, ...stockData, ...stockData]

  return (
    <section className="bg-slate-900/50 border-b border-slate-800/50 py-4 overflow-hidden">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-6"
          animate={{
            x: [0, -1500],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {duplicatedStocks.map((stock, index) => (
            <div key={index} className="flex items-center space-x-2 whitespace-nowrap flex-shrink-0">
              {stock.direction === "down" ? (
                <TrendingDown className="w-4 h-4 text-red-500" />
              ) : (
                <TrendingUp className="w-4 h-4 text-emerald-500" />
              )}
              <span className="text-slate-300 font-medium text-sm">{stock.name}</span>
              <span className="text-white font-semibold text-sm">{stock.price}</span>
              <span className={`text-sm ${stock.direction === "down" ? "text-red-400" : "text-emerald-400"}`}>
                {stock.change}
              </span>
              <span
                className={`font-medium text-sm ${stock.direction === "down" ? "text-red-400" : "text-emerald-400"}`}
              >
                ({stock.changePercent})
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
