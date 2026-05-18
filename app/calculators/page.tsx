"use client"

import { useState, useMemo, useCallback } from "react"
import PageHeader from "@/components/shared/PageHeader"
import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Wallet, ArrowRight } from "lucide-react"

// ─── Utility Functions ─────────────────────────────────────────
function formatCurrency(value: number): string {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)} Cr`
  }
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)} L`
  }
  return `₹${value.toLocaleString("en-IN")}`
}

function formatNumber(value: number): string {
  return value.toLocaleString("en-IN")
}

// SIP Future Value: M × [{(1 + r)^n - 1} / r] × (1 + r)
function calculateSIP(monthlyInvestment: number, annualRate: number, years: number) {
  const monthlyRate = annualRate / 12 / 100
  const months = years * 12
  const investedAmount = monthlyInvestment * months
  const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
  const estimatedReturns = futureValue - investedAmount
  return { investedAmount, estimatedReturns, totalValue: futureValue }
}

// Lumpsum Future Value: P × (1 + r)^n
function calculateLumpsum(principal: number, annualRate: number, years: number) {
  const investedAmount = principal
  const futureValue = principal * Math.pow(1 + annualRate / 100, years)
  const estimatedReturns = futureValue - investedAmount
  return { investedAmount, estimatedReturns, totalValue: futureValue }
}

// SWP: iterative monthly calculation
function calculateSWP(totalInvestment: number, withdrawalPerMonth: number, annualRate: number, years: number) {
  const monthlyRate = annualRate / 12 / 100
  const months = years * 12
  let balance = totalInvestment
  let totalWithdrawn = 0

  for (let i = 0; i < months; i++) {
    balance = balance * (1 + monthlyRate)
    balance -= withdrawalPerMonth
    totalWithdrawn += withdrawalPerMonth
    if (balance <= 0) {
      balance = 0
      totalWithdrawn = (i + 1) * withdrawalPerMonth
      break
    }
  }

  return { totalInvestment, totalWithdrawal: totalWithdrawn, finalValue: Math.max(balance, 0) }
}

// ─── Donut Chart ─────────────────────────────────────────────
function DonutChart({ invested, returns, label1 = "Invested amount", label2 = "Est. returns" }: {
  invested: number
  returns: number
  label1?: string
  label2?: string
}) {
  const total = invested + returns
  const investedAngle = total > 0 ? (invested / total) * 360 : 180
  const returnsAngle = 360 - investedAngle

  const outerRadius = 100
  const innerRadius = 64
  const cx = 110
  const cy = 110

  const degToRad = (deg: number) => (deg - 90) * Math.PI / 180

  const createArcPath = (startAngle: number, endAngle: number, outer: number, inner: number) => {
    const startOuter = { x: cx + outer * Math.cos(degToRad(startAngle)), y: cy + outer * Math.sin(degToRad(startAngle)) }
    const endOuter = { x: cx + outer * Math.cos(degToRad(endAngle)), y: cy + outer * Math.sin(degToRad(endAngle)) }
    const startInner = { x: cx + inner * Math.cos(degToRad(endAngle)), y: cy + inner * Math.sin(degToRad(endAngle)) }
    const endInner = { x: cx + inner * Math.cos(degToRad(startAngle)), y: cy + inner * Math.sin(degToRad(startAngle)) }
    const largeArc = endAngle - startAngle > 180 ? 1 : 0

    return `M${startOuter.x},${startOuter.y} A${outer},${outer} 0 ${largeArc} 1 ${endOuter.x},${endOuter.y} L${startInner.x},${startInner.y} A${inner},${inner} 0 ${largeArc} 0 ${endInner.x},${endInner.y} Z`
  }

  return (
    <div className="flex flex-col items-center">
      {/* Legend */}
      <div className="flex items-center justify-between w-full mb-4 px-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm" style={{ background: "rgba(16, 185, 129, 0.3)" }} />
          <span className="text-xs text-slate-400">{label1}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm" style={{ background: "#10b981" }} />
          <span className="text-xs text-slate-400">{label2}</span>
        </div>
      </div>

      {/* SVG Donut */}
      <svg width="220" height="220" viewBox="0 0 220 220">
        {/* Invested segment */}
        <path
          d={createArcPath(0, investedAngle, outerRadius, innerRadius)}
          fill="rgba(16, 185, 129, 0.25)"
          className="transition-all duration-500"
        />
        {/* Returns segment */}
        <path
          d={createArcPath(investedAngle, 360, outerRadius, innerRadius)}
          fill="#10b981"
          className="transition-all duration-500"
        />
      </svg>
    </div>
  )
}

// ─── Slider Input Component ─────────────────────────────────
function SliderInput({ label, value, onChange, min, max, step = 1, prefix = "", suffix = "", id }: {
  label: string
  value: number
  onChange: (val: number) => void
  min: number
  max: number
  step?: number
  prefix?: string
  suffix?: string
  id: string
}) {
  const [inputValue, setInputValue] = useState(String(value))
  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "")
    setInputValue(raw)
  }

  const handleInputBlur = () => {
    setIsEditing(false)
    let num = parseFloat(inputValue)
    if (isNaN(num)) num = min
    num = Math.max(min, Math.min(max, num))
    setInputValue(String(num))
    onChange(num)
  }

  const handleInputFocus = () => {
    setIsEditing(true)
  }

  const handleSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseFloat(e.target.value)
    onChange(num)
    setInputValue(String(num))
  }, [onChange])

  // Update inputValue when value prop changes (from slider)
  const displayValue = isEditing ? inputValue : String(value)

  const sliderPercent = ((value - min) / (max - min)) * 100
  const sliderBackground = `linear-gradient(to right, #10b981 ${sliderPercent}%, #334155 ${sliderPercent}%)`

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <label htmlFor={id} className="text-sm text-slate-300 font-medium">{label}</label>
        <div className="flex items-center bg-slate-800/80 border border-slate-600 rounded-lg px-3 py-1.5 min-w-[120px] justify-end">
          {prefix && <span className="text-emerald-400 font-semibold text-sm mr-1">{prefix}</span>}
          <input
            type="text"
            value={displayValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            onKeyDown={(e) => e.key === "Enter" && handleInputBlur()}
            className="bg-transparent text-right text-emerald-400 font-bold text-sm w-20 outline-none border-none"
            id={`${id}-input`}
          />
          {suffix && <span className="text-emerald-400 font-semibold text-sm ml-1">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className="calc-slider w-full"
        style={{ background: sliderBackground }}
      />
    </div>
  )
}

// ─── SIP Calculator ─────────────────────────────────────────
function SIPCalculator() {
  const [mode, setMode] = useState<"sip" | "lumpsum">("sip")
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000)
  const [lumpsumAmount, setLumpsumAmount] = useState(25000)
  const [returnRate, setReturnRate] = useState(12)
  const [timePeriod, setTimePeriod] = useState(10)

  const results = useMemo(() => {
    if (mode === "sip") {
      return calculateSIP(monthlyInvestment, returnRate, timePeriod)
    } else {
      return calculateLumpsum(lumpsumAmount, returnRate, timePeriod)
    }
  }, [mode, monthlyInvestment, lumpsumAmount, returnRate, timePeriod])

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">SIP Calculator</h2>
      <div className="card-dark p-6 md:p-8 rounded-xl">
        {/* Tabs */}
        <div className="flex mb-8 bg-slate-800 rounded-lg p-1 w-fit">
          <button
            onClick={() => setMode("sip")}
            className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
              mode === "sip"
                ? "bg-emerald-600 text-white shadow-lg"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            SIP
          </button>
          <button
            onClick={() => setMode("lumpsum")}
            className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${
              mode === "lumpsum"
                ? "bg-emerald-600 text-white shadow-lg"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Lumpsum
          </button>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Sliders */}
          <div className="lg:col-span-3">
            {mode === "sip" ? (
              <SliderInput
                label="Monthly investment"
                value={monthlyInvestment}
                onChange={setMonthlyInvestment}
                min={500}
                max={1000000}
                step={500}
                prefix="₹"
                id="sip-monthly"
              />
            ) : (
              <SliderInput
                label="Total investment"
                value={lumpsumAmount}
                onChange={setLumpsumAmount}
                min={1000}
                max={10000000}
                step={1000}
                prefix="₹"
                id="lumpsum-amount"
              />
            )}

            <SliderInput
              label="Expected return rate (p.a)"
              value={returnRate}
              onChange={setReturnRate}
              min={1}
              max={30}
              step={0.5}
              suffix="%"
              id="sip-rate"
            />

            <SliderInput
              label="Time period"
              value={timePeriod}
              onChange={setTimePeriod}
              min={1}
              max={40}
              step={1}
              suffix="Yr"
              id="sip-time"
            />

            {/* Results */}
            <div className="mt-8 space-y-3 pt-6 border-t border-slate-700 relative">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Invested amount</span>
                <span className="text-white font-bold">₹{formatNumber(Math.round(results.investedAmount))}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Est. returns</span>
                <span className="text-white font-bold">₹{formatNumber(Math.round(results.estimatedReturns))}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Total value</span>
                <span className="text-emerald-400 font-bold text-lg">₹{formatNumber(Math.round(results.totalValue))}</span>
              </div>
              <div className="flex justify-end pt-4">
                <a
                  href="https://wa.me/919911186409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-5 py-2.5 flex items-center gap-2"
                >
                  INVEST NOW <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Donut Chart */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <DonutChart
              invested={results.investedAmount}
              returns={results.estimatedReturns}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── SWP Calculator ─────────────────────────────────────────
function SWPCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(500000)
  const [withdrawalPerMonth, setWithdrawalPerMonth] = useState(10000)
  const [returnRate, setReturnRate] = useState(8)
  const [timePeriod, setTimePeriod] = useState(5)

  const results = useMemo(() => {
    return calculateSWP(totalInvestment, withdrawalPerMonth, returnRate, timePeriod)
  }, [totalInvestment, withdrawalPerMonth, returnRate, timePeriod])

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">SWP Calculator</h2>
      <div className="card-dark p-6 md:p-8 rounded-xl">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Sliders */}
          <div className="lg:col-span-3">
            <SliderInput
              label="Total investment"
              value={totalInvestment}
              onChange={setTotalInvestment}
              min={10000}
              max={10000000}
              step={10000}
              prefix="₹"
              id="swp-investment"
            />

            <SliderInput
              label="Withdrawal per month"
              value={withdrawalPerMonth}
              onChange={setWithdrawalPerMonth}
              min={500}
              max={1000000}
              step={500}
              prefix="₹"
              id="swp-withdrawal"
            />

            <SliderInput
              label="Expected return rate (p.a)"
              value={returnRate}
              onChange={setReturnRate}
              min={1}
              max={30}
              step={0.5}
              suffix="%"
              id="swp-rate"
            />

            <SliderInput
              label="Time period"
              value={timePeriod}
              onChange={setTimePeriod}
              min={1}
              max={30}
              step={1}
              suffix="Yr"
              id="swp-time"
            />

            {/* Results */}
            <div className="mt-8 space-y-3 pt-6 border-t border-slate-700">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Total investment</span>
                <span className="text-white font-bold">₹{formatNumber(Math.round(results.totalInvestment))}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Total withdrawal</span>
                <span className="text-white font-bold">₹{formatNumber(Math.round(results.totalWithdrawal))}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Final value</span>
                <span className="text-emerald-400 font-bold text-lg">₹{formatNumber(Math.round(results.finalValue))}</span>
              </div>
            </div>
          </div>

          {/* Right: Donut Chart */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <DonutChart
              invested={results.totalWithdrawal}
              returns={results.finalValue}
              label1="Total withdrawal"
              label2="Final value"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Calculators Page ──────────────────────────────────
export default function Calculators() {
  const [activeTab, setActiveTab] = useState<"sip" | "swp">("sip")

  const tabs = [
    { id: "sip" as const, label: "SIP / Lumpsum", icon: TrendingUp, description: "Systematic Investment Plan & Lumpsum" },
    { id: "swp" as const, label: "SWP", icon: Wallet, description: "Systematic Withdrawal Plan" },
  ]

  return (
    <main>
      <PageHeader title="Financial Calculators" subtitle="Powerful tools to plan your investments" />

      <section className="py-12 md:py-20">
        <div className="container">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-12 justify-center"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 min-w-[200px] ${
                    activeTab === tab.id
                      ? "bg-emerald-600/20 border-emerald-500 text-white shadow-lg shadow-emerald-600/10"
                      : "bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeTab === tab.id ? "bg-emerald-600" : "bg-slate-700"
                  }`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm">{tab.label}</p>
                    <p className="text-xs opacity-70">{tab.description}</p>
                  </div>
                </button>
              )
            })}
          </motion.div>

          {/* Calculator Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === "sip" && <SIPCalculator />}
            {activeTab === "swp" && <SWPCalculator />}
          </motion.div>

          {/* Educational Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16"
          >
            {activeTab === "sip" && (
              <div className="card-dark p-8 rounded-xl space-y-6">
                <h3 className="text-xl font-bold text-white">SIP Calculator – Systematic Investment Plan Calculator</h3>
                <p className="text-slate-400 leading-relaxed">
                  A SIP calculator is a tool that helps you determine the returns you can avail when parking your funds in
                  such investment tools. Systematic Investment Plan or SIP is a process of investing a fixed sum of money
                  in mutual funds at regular intervals. SIPs usually allow you to invest weekly, quarterly, or monthly.
                </p>
                <h4 className="text-lg font-bold text-white">How does the SIP Calculator work?</h4>
                <p className="text-slate-400 leading-relaxed">
                  <strong className="text-slate-300">SIP formula:</strong> M × [{'{'}(1 + r)<sup>n</sup> - 1{'}'} / r] × (1 + r)
                  <br /><br />
                  Where M is the monthly investment, r is the monthly rate of return (annual rate / 12 / 100),
                  and n is the total number of months.
                </p>
                <h4 className="text-lg font-bold text-white">Lumpsum Calculator</h4>
                <p className="text-slate-400 leading-relaxed">
                  A lumpsum calculator helps you estimate the future value of a one-time investment.
                  The formula used is: <strong className="text-slate-300">A = P × (1 + r)<sup>n</sup></strong>, where P is the
                  principal amount, r is the annual rate of return, and n is the number of years.
                </p>
              </div>
            )}
            {activeTab === "swp" && (
              <div className="card-dark p-8 rounded-xl space-y-6">
                <h3 className="text-xl font-bold text-white">SWP Calculator – Systematic Withdrawal Plan Calculator</h3>
                <p className="text-slate-400 leading-relaxed">
                  SWP stands for Systematic Withdrawal Plan. Under SWP, if you invest a lump sum in a mutual fund,
                  you can set an amount you'll withdraw regularly and the frequency at which you'll withdraw.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  For example, let's say you invested in HDFC Top 200 Fund an amount of ₹1 lakh for a year. Let's assume
                  that you decided to withdraw an amount of ₹10,000 per month. So every month, your investment in the fund
                  will reduce by ₹10,000. The amount left every month after withdrawal will continue to remain invested.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Use the above SWP calculator to know how much you can withdraw from your lumpsum investments.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800/20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Help with Calculations?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our expert advisors can help you with personalized calculations and investment planning tailored to your
            specific goals and financial situation.
          </p>
          <a href="https://wa.me/919911186409"
            target="_blank"
            rel="noopener noreferrer" className="btn-primary">Contact Our Advisors</a>
        </div>
      </section>
    </main>
  )
}
