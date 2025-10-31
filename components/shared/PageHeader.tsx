interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-12 bg-gradient-to-b from-slate-800/50 to-transparent">
      <div className="container text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight text-balance">{title}</h1>
        {subtitle && <p className="text-xl text-slate-300 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
